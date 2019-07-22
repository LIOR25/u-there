import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import CityStore from './modules/CityStore.js';
import UserStore from './modules/UserStore.js';
import ChatStore from './modules/ChatStore.js';
import ActivityStore from './modules/ActivityStore.js'
import SocketStore from './modules/SocketStore.js'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CityStore,
    UserStore,
    ChatStore,
    ActivityStore,
    SocketStore
  }
});
