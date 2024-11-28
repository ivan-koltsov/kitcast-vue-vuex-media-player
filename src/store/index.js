import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    data: null,
    isLoading: false,
    error: null
  },
  getters: {
    currentMedia: state => state.data
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setLoading(state, status) {
      state.isLoading = status;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('/api/data');
        commit('setData', response.data.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
  },
});

export default store;