<template>
  <div class="media-player">
    <component
      :is="currentMedia.type"
      :src="currentMedia.src"
      @ended="playNext"
    />

    <div class="controls">
      <button @click="prevMedia">Previous</button>
      <span>Slide: {{ currentIndex + 1 }} of {{ totalSlides }}</span>
      <button @click="playNext">Next</button>
    </div>
  </div>
</template>

<script>
import MediaPlayer from './components/MediaPlayer.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentMedia']),
    currentIndex() {
      return this.$store.state.currentIndex;
    },
    totalSlides() {
      return this.$store.state.playlist.length;
    },
  },
  methods: {
    ...mapActions(['playNext']),
    prevMedia() {
      this.$store.commit('prev');
    },
  },
  components: {
    MediaPlayer,
    image: {
      props: ['src'],
      template: '<img :src="src" class="media-img" alt="Media" />',
    },
    video: {
      props: ['src'],
      template: `
        <video controls autoplay width="640" height="480">
          <source :src="src" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `,
    },
  },
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
