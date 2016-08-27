// -------------------------------------------------------------------------
// requires
require('./bootstrap');

const app = new Vue({
    el: 'body'
});

Vue.component('contact-form', require('../components/ContactForm.vue'));
