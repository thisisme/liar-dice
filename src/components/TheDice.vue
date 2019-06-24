<template>
  <section>
    <div class="dice" :class="`dice-${dice}`" @click="click()">
      <img :src="require(`@/assets/dices/${getDiceFace(dice)}.svg`)" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dice',
  props: {
    dice: {
      type: Number,
      required: true
    }
  },
  methods: {
    getDiceFace (dice) {
      switch (dice) {
        case 9: {
          return 'nine'
        }
        case 10: {
          return 'ten'
        }
        case 11: {
          return 'jack'
        }
        case 12: {
          return 'queen'
        }
        case 13: {
          return 'king'
        }
        case 14: {
          return 'ace'
        }
      }
    },
    click (e) {
      this.$emit('throwdice')
    }
  }
}
</script>

<style lang="scss" scoped>
  .dice {
    width: 10rem;
    img {
      width: 100%;
    }
  }
</style>
