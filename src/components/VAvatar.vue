<template>
  <div
    class="avatar"
    :style="{ height: getSize, width: getSize }"
    @click="$emit('click')"
  >
    <div
      class="avatar__border"
      :style="{
        padding: getPadding,
        width: getSizeBorder,
        height: getSizeBorder,
        backgroundImage: getBorderColor,
      }"
    ></div>
    <figure class="avatar__figure">
      <img class="avatar__img" :src="src" alt="user image" />
    </figure>
    <div class="avatar__slot">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-avatar',
  props: {
    src: {
      default: require('../assets/picture__user__blank.png'),
      type: String,
    },
    size: {
      default: 90,
      type: Number,
    },
    primaryBorderColor: {
      default: 'transparent',
      type: String,
    },
    secondaryBorderColor: {
      default: 'transparent',
      type: String,
    },
  },
  computed: {
    getSize() {
      return `${this.size}px`;
    },
    getPadding() {
      return `${Math.floor(this.size / 20)}px`;
    },
    getSizeBorder() {
      return `calc(100% + ${Math.floor(this.size / 20) * 2}px)`;
    },
    getBorderColor() {
      return `linear-gradient(white, white), radial-gradient(circle at top left, ${this.primaryBorderColor}, ${this.secondaryBorderColor})`;
    },
  },
};
</script>

<style scoped lang="scss">
.avatar {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &__border {
    position: absolute;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    border-radius: 50%;
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  &__figure {
    margin: 0;
    border-radius: 50%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__slot {
    z-index: 2;
  }
}
</style>
