import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Loading from '../public/loading.gif'
import ErrorImg from '../public/error.png'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: ErrorImg,
  loading: Loading,
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
