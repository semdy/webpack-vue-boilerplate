export default {
  // ensure data for rendering given list type
  FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
    commit('SET_ACTIVE_TYPE', { type })
    commit('SET_LIST', { type, ids: [1, 2, 3, 4, 5, 6] })
    return dispatch('ENSURE_ACTIVE_ITEMS')
  },

  // ensure all active items are fetched
  ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
    return dispatch('FETCH_ITEMS', {
      ids: getters.activeIds
    })
  },

  FETCH_ITEMS: ({ commit, state }, { ids }) => {
    return Promise.resolve()
  },

  FETCH_USER: ({ commit, state }, { id }) => {
    return Promise.resolve(state.users[id])
  }
}
