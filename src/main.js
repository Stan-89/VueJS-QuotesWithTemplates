import Vue from 'vue'
import App from './App'

//Event bus for communciation between siblings
export const theEventBus = new Vue();


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
