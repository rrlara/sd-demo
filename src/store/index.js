import Vue from 'vue'
import Vuex from 'vuex'
import { fetchCalls } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: {},
    currentCall: null
  },

  actions: {

    FETCH_ITEMS: ({ commit, state }) => {
      // on the client, the store itself serves as a cache.
      // only fetch items that we do not already have, or has expired (3 minutes)
      return fetchCalls().then(items => commit('SET_ITEMS', { items }))

    }
  },

  mutations: {

    SET_ITEMS: (state, { items }) => {

      // Vue.set(state.items, items)

      state.items = items;

    }

  }
})

export default store