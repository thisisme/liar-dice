import Vue from 'vue'
import Vuex from 'vuex'
import dices from './dices'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { dices }
})
