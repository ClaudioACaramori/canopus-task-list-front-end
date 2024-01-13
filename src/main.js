/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './routes';
import vuetify from './plugins/vuetify';

const app = createApp(App)
const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.use(vuetify)
app.mount('#app');

registerPlugins(app)


