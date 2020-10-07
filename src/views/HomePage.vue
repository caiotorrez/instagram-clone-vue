<template>
  <!-- top  -->
  <header>
    <the-navbar class="navbar">
      <template v-slot:left-bar>
        <v-upload-image class="navbar__left__button">
          <img
            class="navbar__left__button__icon"
            src="@/assets/icons/camera.svg"
            alt="camera-icon"
          />
        </v-upload-image>
      </template>
      <template v-slot:center-bar>
        <v-logo />
      </template>
      <template v-slot:right-bar>
        <v-direct :size="24" class="navbar__right__button" />
      </template>
    </the-navbar>
    <stories-navbar />

    <!-- timeline -->
    <section>
      <timeline-card />
    </section>
  </header>
</template>

<script>
import TheStoriesNavbar from "@/components/TheStoriesNavbar.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TimelineCard from "@/components/TimelineCard.vue";
import VLogo from "@/components/VLogo.vue";
import VFileButton from "@/components/VFileButton.vue";
import VDirect from "@/components/VDirect.vue";

export default {
  name: "home-page",
  components: {
    "the-navbar": TheNavbar,
    "stories-navbar": TheStoriesNavbar,
    "v-logo": VLogo,
    "v-upload-image": VFileButton,
    TimelineCard,
    VDirect,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  &__left__button,
  &__right__button {
    display: flex;
    padding: 10px 15px;

    &__icon {
      height: 24px;
    }
  }
  &__right__button {
    margin: 0;
    justify-content: flex-end;
  }
}
</style>
