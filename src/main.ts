import { createApp } from 'vue'
import App from './App.vue'

import vuescroll from 'vuescroll';

const app = createApp(App);

app.use(vuescroll, {
    name: 'vuescroll'
});

app.mount('#app');

