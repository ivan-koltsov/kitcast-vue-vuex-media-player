import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    data: null,
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },
  actions: {
    async fetchData({ commit }) {
      const response = await axios.get('/api/data');
      commit('setData', response.data.data);
    },
  },
});