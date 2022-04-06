import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mock from './mock-data.js'

// import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

let data = {
  reviews: mock,
  favorites: [],
  add(review) {
    this.favorites.push(review);
  },
  remove(review) {
    this.favorites.splice(this.favorites.indexOf(review), 1);
    // this.cart.push(product);
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')