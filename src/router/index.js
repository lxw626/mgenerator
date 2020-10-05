import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../pages/hello/Hello.vue'
import Test from '../pages/hello/Test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/test',
      component: Test
    },

  ]
})
