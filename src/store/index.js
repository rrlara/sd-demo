import Vue from 'vue'
import Vuex from 'vuex'
import { fetchCalls } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: {},
    currentCall: null,
    loading: false
  },

  actions: {

    FETCH_ITEMS: ({ commit, state }) => {

      return fetchCalls().then(items => commit('SET_ITEMS', { items }))

    },
    CURRENT_CALL: ({ commit, state }, call) => {

      commit('SET_CURRENT_CALL', { call })

    }
  },

  mutations: {

    SET_ITEMS: (state, { items }) => {

      state.items = items;

    },

    SET_CURRENT_CALL: (state, { call }) => {

      state.currentCall = call;

    }

  }
})

export default store