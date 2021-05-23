import { createApp } from 'vue';

import VueApplication from './App.vue';
// import bootstrap style library
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import customize style
import './asset/style/style.css';

// import components
import ProductListComponent from './components/ProductList.vue';

const app = createApp(VueApplication);

app.component('product-list', ProductListComponent);

app.mount('#app');