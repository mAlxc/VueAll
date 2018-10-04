import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import 'animate.css/animate.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'

import fr from './locale/fr'
import en from './locale/en'

// ##### vue-i18n
// #### internationalization
Vue.use(VueI18n)
// ### fichier locales
const messages = {
  fr: fr,
  en: en
}
// ### config de i18n
const i18n = new VueI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
})

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
