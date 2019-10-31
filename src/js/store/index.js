import Vue from 'vue';
import Vuex from 'vuex';

import chartStore from './modules/chartStore';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    chartStore
  },
  strict: process.env.NODE_ENV !== 'production'
});
