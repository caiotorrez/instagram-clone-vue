<template>
  <div class="storie" @click="$emit('click')">
    <v-avatar
      :size="56"
      :primaryBorderColor="showBorder ? '#cd2d89' : ''"
      :secondaryBorderColor="showBorder ? '#f99143' : ''"
      style="margin: 10px"
    >
      <slot />
    </v-avatar>
    <div class="storie__username">
      <div class="storie__username__text">{{ username }}</div>
    </div>
  </div>
</template>

<script>
import VAvatar from "./VAvatar.vue";

export default {
  name: "storie",
  components: {
    "v-avatar": VAvatar,
  },
  data() {
    return {
      src: "",
    };
  },
  props: {
    username: String,
    showBorder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.storie {
  &__username {
    display: flex;
    justify-content: center;

    &__text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      max-width: 60px;
      text-align: center;
    }
  }
}
</style>
