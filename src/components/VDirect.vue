<template>
  <figure @click="$emit('click', $event)">
    <img :style="{height}" class="icon" src="@/assets/icons/direct.svg" alt="direct-icon" />
  </figure>
</template>

<script>
export default {
  name: "v-direct",
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
