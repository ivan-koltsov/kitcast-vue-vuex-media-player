<template>
  <div class="app">
    <div v-if="isLoading">
      <MediaLoader />
    </div>
    <div v-else-if="currentMedia" class="media-container">
      <MediaPlayer :data="currentMedia" />
    </div>
    <div v-else class="error">Failed to load media</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import MediaPlayer from './components/MediaPlayer.vue';
import MediaLoader from './components/Loader.vue';

export default {
  name: 'App',
  components: {
    MediaPlayer,
    MediaLoader
  },
  computed: {
    ...mapGetters(['currentMedia']),
    ...mapState(['isLoading'])
  },
  async created() {
    await this.$store.dispatch('fetchData');
  }
};
</script>
