// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBDy25y1kuVvdd7r-X5z0wgtFU1oPRTKdw',
    libraries: 'places' // necessary for places input
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
