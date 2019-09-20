// import * as Keycloak from 'keycloak-js'

// // keycloak init options
// let initOptions = {
//   url: 'http://localhost:8080/auth',
//   realm: 'hs-auth',
//   clientId: 'hs-playground',
//   onLoad: 'check-sso'
// }

// let keycloak = Keycloak(initOptions)

// export default async ({ Vue }) => {
//   Vue.prototype.$keycloak = keycloak
//   keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
//     console.log('auth')
//     console.log(auth)
//   })
// }

import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'
import axios from './axios'
import Vue from 'vue'
function tokenInterceptor () {
  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`
    return config
  }, error => {
    return Promise.reject(error)
  })
}

Vue.use(VueKeycloakJs, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: 'check-sso'
  },
  config: {
    url: 'http://localhost:8080/auth',
    realm: 'hs-auth',
    clientId: 'hs-playground'
  },
  onReady: (keycloak) => {
    tokenInterceptor()
    /* eslint-disable no-new */
    // new Vue({
    //   el: '#app',
    //   router,
    //   template: '<App/>',
    //   render: h => h(App)
    // })
  }
})
