<template>
  <div class="dices">
    <TheDice v-for="(dice, i) in dices" :key="i" :dice="dice" @throwdice="newRandomDice(i)"></TheDice>
  </div>
</template>

<script>
import TheDice from './TheDice.vue'

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
      const min = Math.ceil(9)
      const max = Math.floor(14)
      return Math.floor(Math.random() * (max - min)) + min
    },
    newRandomDice (i) {
      this.$set(this.dices, i, this.getRandomDice())
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
