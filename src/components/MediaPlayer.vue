<template>
  <div class="media-player">
    <image v-if="currentMedia && currentMedia.type === 'image'" 
           :src="currentMedia.url" />
    <video v-if="currentMedia && currentMedia.type === 'video'" 
           :src="currentMedia.url" />
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MediaPlayer',
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    const response = await axios.get('/api/data');
    this.data = response.data.data;
  },
  computed: {
    ...mapGetters(['currentMedia']),
    currentIndex() {
      return this.$store.state.currentIndex;
    },
    totalSlides() {
      return this.$store.state.playlist.length;
    }
  },
  methods: {
    ...mapActions(['playNext']),
    prevMedia() {
      this.$store.commit('prev');
    }
  },
  components: {
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