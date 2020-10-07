<template>
  <div class="comment">
    <div>
      <div class="comment__text">
        <strong class="comment__author">username</strong>
        Manda esse post pra amiga que vai tirar fotinhas com você. 🤭🥰
        <span>
          ...
          <button class="comment__more">more</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-user-comment",
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;

  &__author,
  &__text {
    font-size: 14px;
    text-align: left;
  }
  &__author {
    margin-right: 5px;
  }

  &__more {
    background-color: transparent;
    border: none;
    color: #8e8e8e;

    &:focus {
      outline: none;
    }
  }
}
</style>
