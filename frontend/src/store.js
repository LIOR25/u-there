import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import CityStore from './modules/CityStore.js';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CityStore
  }
});
