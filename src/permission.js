import router from './router'

router.beforeEach((to, from, next) => {
  console.info(to.name)
  console.info(from.name)
  console.info(next)
  next()
})

