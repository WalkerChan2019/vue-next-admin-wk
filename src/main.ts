import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { directive } from '/@/utils/directive';
import { i18n } from '/@/i18n/index';
console.log(i18n.global);
import other from '/@/utils/other';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '/@/theme/index.scss';
import mitt from 'mitt';
import VueGridLayout from 'vue-grid-layout';

if (process.env.NODE_ENV === 'production') {
	const { mockXHR } = require('./mock');
	mockXHR();
}

const app = createApp(App);

directive(app);
other.elSvg(app);

app.use(router).use(store, key).use(ElementPlus, { i18n: i18n.global.t }).use(i18n).use(VueGridLayout).mount('#app');

app.config.globalProperties.mittBus = mitt();
