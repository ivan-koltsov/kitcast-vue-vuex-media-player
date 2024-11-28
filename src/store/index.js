import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    playlist: [],
    currentIndex: 0,
    isLoading: false,
    error: null
  },
  getters: {
    currentMedia: state => state.playlist[state.currentIndex] || null
  },
  mutations: {
    setPlaylist(state, playlist) {
      state.playlist = playlist;
    },
    setCurrentIndex(state, index) {
      state.currentIndex = index;
    },
    setLoading(state, status) {
      state.isLoading = status;
    },
    setError(state, error) {
      state.error = error;
    },
    nextSlide(state) {
      state.currentIndex = (state.currentIndex + 1) % state.playlist.length;
    }
  },
  actions: {
    async fetchData({ commit, dispatch }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('/api/data');
        commit('setPlaylist', response.data.data);
        commit('setCurrentIndex', 0);
        dispatch('startSlideshow');
      } catch (error) {
        console.error('Error fetching data:', error);
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    startSlideshow({ commit, state }) {
      const duration = 5000;
      setInterval(() => {
        if (state.playlist.length > 0) {
          commit('nextSlide');
        }
      }, duration);
    }
  }
});

export default store;