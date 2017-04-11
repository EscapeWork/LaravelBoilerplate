// -------------------------------------------------------
// jquery and bootstrap (and other vendors)
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap/modal.js');
require('swiper');
require('sweetalert');

// require('jquery.inputmask/dist/jquery.inputmask.bundle.js');
// require('bootstrap-select');

// -------------------------------------------------------
// VueJS imports and config
// window.Vue = require('vue/dist/vue.js');
// const VueResource = require('vue-resource');

// Vue.http.interceptors.push((request, next) => {
//     request.headers.set('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
//     next();
// });

// Vue.use(VueResource);

// -------------------------------------------------------
// Nossos modulos padrões
require('../modules/message');
require('../modules/contact');
require('../modules/loader');
