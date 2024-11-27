import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import { worker } from './__mocks__/axios';

worker.start();
createApp(App).use(store).mount('#app');
