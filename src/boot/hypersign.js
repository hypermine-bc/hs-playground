import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'

Vue.use(VueKeycloakJs, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: 'check-sso'
  },
  config: {
    url: 'http://localhost:8080/auth',
    clientId: 'hs-playground',
    realm: 'hs-auth'
  },
  onReady: (keycloak) => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})