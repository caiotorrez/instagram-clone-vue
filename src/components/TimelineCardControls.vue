<template>
  <section>
    <div class="controls">
      <div class="controls__left">
        <v-like class="controls__left__icon" :size="24" />
        <v-comment class="controls__left__icon" :size="24" />
        <v-direct class="controls__left__icon" :size="24" />
      </div>
      <div class="controls__right">
        <v-flag class="controls__right__icon" :size="24" />
      </div>
      <div class="controls__like">
        <v-avatar class="controls__like__avatar" :size="20" />
        <v-like-info class="controls__like__info" />
      </div>
    </div>
  </section>
</template>

<script>
import VDirect from "@/components/VDirect.vue";
import VComment from "@/components/VComment.vue";
import VFlag from "@/components/VFlag.vue";
import VLike from "@/components/VLike.vue";
import VAvatar from "@/components/VAvatar.vue";
import VLikeInfo from "@/components/VLikeInfo.vue";

export default {
  components: {
    VDirect,
    VComment,
    VFlag,
    VLike,
    VLikeInfo,
    "v-avatar": VAvatar,
  },
};
</script>

<style lang="scss" scoped>
figure {
  margin: 0;
}
.controls {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 7px;

  &__left {
    display: flex;
    align-items: center;

    &__icon {
      padding: 8px 8px 3px 8px;
    }
  }
  &__right__icon {
    padding: 8px 8px 3px 8px;
  }

  &__like {
    display: flex;
    align-items: center;
    padding-left: 8px;

    &__avatar {
      margin-right: 5px;
    }

    &__info {
      font-size: 14px;
    }
  }
}
</style>
