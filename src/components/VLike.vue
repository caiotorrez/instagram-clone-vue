<template>
  <figure @click="$emit('click', $event)">
    <img :style="{height}" class="icon" src="@/assets/icons/like.svg" alt="direct-icon" />
  </figure>
</template>

<script>
export default {
  name: "v-like",
  computed: {
    height: function() {
      return this.size + 'px'
    }
  },
  props: {
    size: {
      type: Number,
      default: 24
    }
  }
};
</script>
