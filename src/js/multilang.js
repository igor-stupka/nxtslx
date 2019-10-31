import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'de', // current language
  fallbackLocale: 'de',
  messages: {
    de: require('./locales/de.json'),
    en: require('./locales/en.json')
  }
});

export default i18n;
