<template>
  <video controls autoplay class="media-video">
    <source :src="src" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  name: 'VideoComponent',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.media-video {
  max-width: 100%;
  height: auto;
}
</style> 