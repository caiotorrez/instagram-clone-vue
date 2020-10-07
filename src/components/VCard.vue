<template>
  <div>
    <div>
      <slot name="header" />
    </div>
    <div>
      <slot name="body" />
    </div>
    <div>
      <slot name="controls" />
    </div>
    <div>
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-card',
}
</script>

<style>

</style>
