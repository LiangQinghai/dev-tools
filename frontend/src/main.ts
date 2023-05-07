import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

app.use(router);
app.use(store);
// app.use(directive);

app.mount('#app');
