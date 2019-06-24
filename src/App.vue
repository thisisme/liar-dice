<template>
  <div id="app">
    <TheDice v-for="i in dices.length" :key="i" :dice="dices[i]" @throwdice="newRandomDice(i)"></TheDice>
  </div>
</template>

<script>
import TheDice from './components/TheDice.vue'

export default {
  name: 'app',
  components: {
    TheDice
  },
  data () {
    return {
      dices: Array.from({ length: 5 }, () => this.getRandomDice())
    }
  },
  methods: {
    getRandomDice () {
      const min = Math.ceil(9)
      const max = Math.floor(14)
      return Math.floor(Math.random() * (max - min)) + min
    },
    newRandomDice (i) {
      console.log('test')
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
  display: flex;
  justify-content: space-between;
}
</style>
