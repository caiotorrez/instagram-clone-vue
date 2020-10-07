<template>
  <section class="comments">
    <v-user-comment class="comments__title" />
    <div class="comments__users">
      <p class="comments__view__more">View all 33 comments</p>
      <v-user-comment />
    </div>
  </section>
</template>

<script>
import VUserComment from "./VUserComment";
export default {
  name: "timeline-card-footer",
  components: {
    VUserComment,
  },
};
</script>

<style lang="scss" scoped>
.comments {
  &__title {
    margin-bottom: 5px;
  }

  &__view__more {
    font-size: 14px;
    color: #8e8e8e;
    text-align: left;
    margin: 5px 0;
  }

  &__users {
    margin-top: 5px;
  }
}
</style>
