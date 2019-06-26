/** Store module to dices **/

import Vue from 'vue'

export default {
  namespaced: true,
  // ----------------------------------------------------------------------------------
  state: {
    players: [
      {
        'name': 'Mats'
      },
      {
        'name': 'Janne'
      },
      {
        'name': 'Martin'
      }
    ],
    currentPlayer: 0,
    turn: 0,
    dices: []
  },
  // ----------------------------------------------------------------------------------
  getters: {
    player: state => index => { return state.players[index] },
    players: state => state.players,
    currentPlayer: state => state.currentPlayer,
    dices: state => state.dices,
    turn: state => state.turn
  },
  // ----------------------------------------------------------------------------------
  mutations: {
    addPlayer: (state, player) => {
      Vue.set(state, 'players', [...state.players, player])
    },
    setCurrentPlayer: (state, player) => {
      Vue.set(state, 'currentPlayer', player)
    },
    setDices: (state, dices) => {
      Vue.set(state, 'dices', dices)
    },
    turn: (state, turn) => {
      Vue.set(state, 'turn', state.turn + 1)
    }
  },
  // ----------------------------------------------------------------------------------
  actions: {
    /** Search for a movies collection matching a string  **/
    // search: (context, searchString) => {
    //   if (!searchString) {
    //     context.commit('setMovies', [])
    //     return Promise.resolve([])
    //   }
    //   const params = {
    //     api_key: process.env.VUE_APP_API_KEY,
    //     query: searchString
    //   }
    //   // don't forget that an action should return a promise.
    //   return Vue.axios.get(`search/movie`, { params })
    //     .then(response => {
    //       console.log(`search successfull for "${params.query}" : ${response.data.results.length} found.`)
    //       // convert all raw data movies to Movie class
    //       const newCollection = []
    //       for (const movie of response.data.results) {
    //         newCollection.push(new Movie(movie))
    //       }
    //       // uses Vue.set to be sure to be deeply reactive
    //       context.commit('setMovies', newCollection)
    //       return Promise.resolve(context.state.movies)
    //     })
    //     .catch(error => {
    //       // in case of error, empties the movies collection
    //       context.commit('setMovies', [])
    //       return Promise.reject(error)
    //     })
    // }
  }
}
