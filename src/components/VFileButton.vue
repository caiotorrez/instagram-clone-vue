<template>
  <button class="button" @click="$emit('click', $event)">
    <slot class="button__slot" />
    <input
      type="file"
      v-show="false"
      accept="image/*"
      @change="$emit('change', $event)"
    />
  </button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    color: String,
    backgroundColor: String,
    size: Number,
    rounded: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.button {
  border: none;
  background-color: transparent;
}
.button:focus {
  outline: none;
}
</style>
