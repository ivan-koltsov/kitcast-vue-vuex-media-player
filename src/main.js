import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet('/api/data').reply(200, {
  data: [
    {
      id: 1,
      type: 'image',
      url: 'https://picsum.photos/800/400'
    },
    {
      id: 2,
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ]
});

const app = createApp(App);
app.use(store);
app.mount('#app');
