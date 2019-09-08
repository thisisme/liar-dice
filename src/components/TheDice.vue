<template>
  <section>
    <div class="dice" :class="`dice-${dice}`" @click="click()">
      <img :src="require(`@/assets/dices/${getDiceFace(dice)}.svg`)" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheDice',
  props: {
    dice: {
      type: Number,
      required: true
    }
  },
  methods: {
    getDiceFace (dice) {
      switch (dice) {
        case 1: {
          return 'nine'
        }
        case 2: {
          return 'ten'
        }
        case 3: {
          return 'jack'
        }
        case 4: {
          return 'queen'
        }
        case 5: {
          return 'king'
        }
        case 6: {
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
