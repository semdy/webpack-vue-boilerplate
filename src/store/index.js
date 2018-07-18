import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {1: {name: 'semdy'}},
      users: {'001': {name: 'semdy'}},
      lists: {
        top: [1, 2, 3, 4, 5],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    actions,
    mutations,
    getters
  })
}
