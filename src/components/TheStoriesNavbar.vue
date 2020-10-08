<template>
  <section>
    <nav class="navigation">
      <v-storie username="Your Story">
        <v-file-button class="storie__button">
          <span class="storie__button__icon">+</span>
        </v-file-button>
      </v-storie>
      <div class="navigation__stories" v-if="stories.length">
        <v-storie
          v-for="({ name }, index) in notSeen"
          :username="name"
          :key="name + index"
          :showBorder="true"
        />
        <v-storie
          v-for="({ name }, index) in seen"
          :username="name"
          :key="name + index"
          :showBorder="true"
          primaryBorderColor="#ddd"
          secondaryBorderColor="#ddd"
        />
      </div>
      <div v-else>Loading....</div>
    </nav>
  </section>
</template>

<script>
import VStorie from "./VStorie.vue";
import VFileButton from "./VFileButton.vue";

export default {
  name: "stories-navbar",
  components: {
    "v-storie": VStorie,
    "v-file-button": VFileButton,
  },
  props: {
    stories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    seen: function () {
      return this.stories.filter((storie, index) => {
        if (index % 2 === 0) return storie;
      });
    },
    notSeen: function () {
      return this.stories.filter((storie, index) => {
        if (index % 2 != 0) return storie;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  overflow: auto hidden;
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fafafa;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__stories {
    display: flex;
    align-items: center;
  }
}
.storie__button {
  border-radius: 50%;
  color: #7fcafa;
  background-color: #0095f6;
  border: 1px white solid;
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: 22px;
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &__icon {
    font-size: 20px !important;
  }
}
</style>
