<template>
  <header class="header">
    <div class="header__first__container">
      <v-avatar :size="32" style="margin: 10px" />
      <div class="header__user">
        <h5 class="header__user__name">caiotorrez</h5>
        <small class="header__user__location">Campina Grande, Brazil</small>
      </div>
    </div>
    <div class="header__option">
      <figure class="header__option__icon">
        <img
          class="header__option__img"
          src="@/assets/icons/three-dots.svg"
          alt="three-dots"
        />
      </figure>
    </div>
  </header>
</template>

<script>
import VAavatar from "./VAvatar";

export default {
  name: "timeline-card-header",
  components: {
    "v-avatar": VAavatar,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  text-align: left;
  margin: 5px;

  &__first__container {
    display: flex;
    align-items: center;
    flex: 1;
  }

  &__user {
    &__name {
      margin: 0 0 1px 0;
    }
    &__location {
      font-size: 12px;
    }
  }

  &__option {
    width: 50px;

    &__icon {
      height: 14px;
      margin: 0;
      padding: 10px 15px;
      display: flex;
      justify-content: flex-end;
    }
    &__img {
      height: 100%;
    }
  }
}
</style>

