// -------------------------------------------------------
// jquery and bootstrap (and other vendors)
window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
require('Slidebars/dist/slidebars.min');
require('bootstrap-sass/assets/javascripts/bootstrap/modal.js');

// require('jquery.inputmask/dist/jquery.inputmask.bundle.js');
// require('bootstrap-select');

// -------------------------------------------------------
// VueJS imports and config
window.Vue = require('vue');
require('vue-resource');

Vue.http.interceptors.push((request, next) => {
    request.headers['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
    next();
});

// -------------------------------------------------------
// Nossos modulos padrões
require('../modules/message');
// require('../modules/contact');
