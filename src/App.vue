<template>
  <div id="app">
    <h1>Turn {{ getTurn() }}</h1>
    <h2>{{ getCurrentPlayerName() }} is playing</h2>
    <button @click="next()" class="btn">Next person</button>
    <button @click="newRound()" class="btn">New round</button>
    <TheDices :currentPlayer="currentPlayer" />
  </div>
</template>

<script>
import TheDices from './components/TheDices'

export default {
  name: 'app',
  components: {
    TheDices
  },
  data () {
    return {
      currentPlayer: 0
    }
  },
  methods: {
    getTurn () {
      return this.$store.getters['game/turn']
    },
    getCurrentPlayerName () {
      return this.$store.getters['game/player'](this.currentPlayer).name
    },
    next () {
      let currentPlayer = this.currentPlayer + 1
      if (currentPlayer === this.$store.getters['game/players'].length) {
        currentPlayer = 0
        this.$store.commit('game/turn')
      }
      this.$store.commit('game/setCurrentPlayer', { currentPlayer })
      this.currentPlayer = currentPlayer
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  padding: 0.5rem;
  text-transform: uppercase;
  background-color: purple;
  color: white;
  margin: 1rem;
  border: none;
}
</style>
