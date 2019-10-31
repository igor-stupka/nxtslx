import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './js/App.vue';
import { store } from './js/store';
import i18n from './js/multilang';

Vue.use(VueI18n);

new Vue({
  el: '#app',
  i18n,
  store,
  render: (h) => h(App)
});
