<template>
  <div id="app">
    <TheDice v-for="(dice, i) in dices" :key="i" :dice="dice" @throwdice="newRandomDice(i)"></TheDice>
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
      this.$set(this.dices, i, this.getRandomDice())
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
