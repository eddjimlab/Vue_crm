import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDerctive from '@/directives/tooltip.derectives'
import messagePlugin from '@/plugins/message.plugin'
import titlePlugin from '@/plugins/title.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.filter('datefilter', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDerctive)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: 'AIzaSyCY5czxeGAvwq-3-R2wrIE2cfb_cetHyw8',
  authDomain: 'vue-crm-e55fd.firebaseapp.com',
  databaseURL: 'https://vue-crm-e55fd.firebaseio.com',
  projectId: 'vue-crm-e55fd',
  storageBucket: 'vue-crm-e55fd.appspot.com',
  messagingSenderId: '359802471476',
  appId: '1:359802471476:web:19a492570bc6af21d3b661',
  measurementId: 'G-BPEEEVE3Z3'
})

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
