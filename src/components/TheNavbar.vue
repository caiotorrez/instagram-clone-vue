<template>
  <div class="app__bar">
    <div class="app__bar__left">
      <slot name="left-bar" />
    </div>

    <div class="app__bar__center">
      <slot name="center-bar" />
    </div>

    <div class="app__bar__right">
      <slot name="right-bar" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-navbar',
};
</script>

<style lang="scss" scoped>
.app__bar {
  display: flex;
  align-items: center;
  height: 44px;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;

  &__left,
  &__center,
  &__right {
    flex: 1;
  }
}
</style>
