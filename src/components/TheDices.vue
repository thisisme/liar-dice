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
      dices: Array.from({ length: 5 }, () => this.getRandomDice())
    }
  },
  methods: {
    getRandomDice () {
      const min = Math.ceil(1)
      const max = Math.floor(6)
      return Math.floor(Math.random() * (max - min)) + min
    },
    newRandomDice (i) {
      this.$set(this.dices, i, this.getRandomDice())
      checkIfBetter(this.dices)
    }
  },
  watch: {
    currentPlayer (newPlayer, oldPlayer) {
      console.log(this.$store.getters['game/player'](newPlayer).name)
      // console.log(`going from ${this.$store.getters['game/player'](oldPlayer)} to ${this.$store.getters['game/player'](newPlayer)}`)
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
