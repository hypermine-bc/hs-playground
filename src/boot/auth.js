import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'
// import axios from './axios'
import Vue from 'vue'
// function tokenInterceptor () {
//   axios.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`
//     return config
//   }, error => {
//     return Promise.reject(error)
//   })
// }

let ready = new Promise(resolve => {
  Vue.use(VueKeycloakJs, {
    init: {
      // Use 'login-required' to always require authentication
      // If using 'login-required', there is no need for the router guards in router.js
      onLoad: 'check-sso'
    },
    config: {
      url: 'http://localhost:8080/auth',
      realm: 'hypermine',
      clientId: 'hs-playground'
    },
    onReady: resolve
  })
})

export default async function ({ Vue, store }) {
  await ready
  // tokenInterceptor()
}
