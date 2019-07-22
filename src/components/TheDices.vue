<template>
  <div class="dices">
    <TheDice v-for="(dice, i) in dices" :key="i" :dice="dice" @throwdice="newRandomDice(i)"></TheDice>
  </div>
</template>

<script>
import TheDice from './TheDice.vue'
import { checkIfBetter } from '@/core/game.js'

export default {
  name: 'TheDices',
  components: {
    TheDice
  },
  props: {
    currentPlayer: {
      type: Number
    }
  },
  data () {
    return {
      dices: Array.from({ length: 5 }, () => this.getRandomDice()),
      parentDices: [],
      clickedDices: []
    }
  },
  methods: {
    getRandomDice () {
      const min = Math.ceil(1)
      const max = Math.floor(7)
      return Math.floor(Math.random() * (max - min)) + min
    },
    newRandomDice (i) {
      if (this.clickedDices.indexOf(i) > -1) {
        console.log('Already tossed')
        return
      }
      this.clickedDices.push(i)
      this.parentDices = this.dices
      this.$set(this.dices, i, this.getRandomDice())
    }
  },
  watch: {
    currentPlayer (newPlayer, oldPlayer) {
      console.log(this.$store.getters['game/player'](newPlayer).name)
      // console.log(`going from ${this.$store.getters['game/player'](oldPlayer)} to ${this.$store.getters['game/player'](newPlayer)}`)
    },
    dices (newDices) {
      console.log(this.parentDices)
      console.log(newDices)
      checkIfBetter(this.dices)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dices {
    display: flex;
    justify-content: space-between;
  }
</style>
