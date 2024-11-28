<template>
  <div class="media-player">
    <template v-if="data">
      <transition name="fade" mode="out-in">
        <component 
          :is="data.type === 'image' ? 'Image' : 'Video'"
          :key="data.id"
          :src="data.url"
        />
      </transition>
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
  position: relative;
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>