import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './moduleA';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increase: function (state) {
      state.count++;
    }
  },
  getters: {
    getCount: function (state) {
      return state.count;
    }
  },
  modules: {
    moduleA,
  }
})

export default store;
