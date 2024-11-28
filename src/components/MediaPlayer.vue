<template>
  <div class="media-player">
    <template v-if="data">
      <Image v-if="data.type === 'image'" :src="data.url" />
      <Video v-if="data.type === 'video'" :src="data.url" />
    </template>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import Image from './Image.vue'
import Video from './Video.vue'

export default {
  name: 'MediaPlayer',
  components: {
    Image,
    Video
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.media-player {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.media-img {
  max-width: 100%;
  height: auto;
}

.controls {
  margin-top: 10px;
}
</style>