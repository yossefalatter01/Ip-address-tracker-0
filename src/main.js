import Vue from 'vue'
import App from './App.vue'

//==import jquery==//
import 'jquery';

//==import bootstrap==//
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//==import css file==//
import './css/style.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
