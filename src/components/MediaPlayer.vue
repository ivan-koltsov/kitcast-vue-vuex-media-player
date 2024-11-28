<template>
  <div class="media-player">
    <Image :src="currentMedia?.url" />
    <Video :src="currentMedia?.url" />
  </div>
</template>

<script>
import axios from 'axios';

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
  components: {
    Image: {
      props: ['src'],
      template: '<img :src="src" class="media-img" alt="Media" />',
    },
    Video: {
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