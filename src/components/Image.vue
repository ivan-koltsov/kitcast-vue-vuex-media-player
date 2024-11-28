<template>
  <img :src="src" class="media-img" alt="Media content" />
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.media-img {
  max-width: 100%;
  height: auto;
}
</style>
