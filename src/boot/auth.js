export default ({ router, store, Vue }) => {
  const whiteList = ['/auth/login', '/auth/register'] // whitelist routes

  router.beforeEach((to, from, next) => {
    debugger
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (router.app.$keycloak.authenticated) {
        next()
      } else {
        // alert('Not Authenticated')
        const loginUrl = router.app.$keycloak.createLoginUrl()
        window.location.replace(loginUrl)
      }
    } else {
      next()
    }
  })
}