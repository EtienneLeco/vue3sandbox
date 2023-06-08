import { createApp } from 'vue'
import App from './App.vue'

import { setupPlugins } from './plugins';

const app = createApp(App);
await setupPlugins(app);

app.mount('#app');
