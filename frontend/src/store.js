import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import CityStore from './modules/CityStore.js';
import UserStore from './modules/UserStore.js';
import ChatStore from './modules/ChatStore.js'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CityStore,
    UserStore,
    ChatStore
  }
});
