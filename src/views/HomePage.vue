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
    <stories-navbar :stories="getStories" />
    <!-- <vue-glide :perView="1" :autoplay="5000" :rewind="false" @glide:run-end="teste">
      <vue-glide-slide v-for="i in 2" :key="i">
        Slide {{ i }}
      </vue-glide-slide>
    </vue-glide> -->

    <!-- timeline -->
    <section>
      <timeline-card v-for="(post, index) in getPosts" :key="index" />
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
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["getPosts", "getStories"]),
  },
  methods: {
    ...mapActions(["setPosts", "setStories"]),
  },

  created: function () {
    this.setStories();
    this.setPosts();
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
