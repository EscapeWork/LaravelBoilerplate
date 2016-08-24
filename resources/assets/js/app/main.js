// -------------------------------------------------------------------------
// requires
require('./bootstrap');

Vue.component('contact-form', require('../components/ContactForm.vue'));

const app = new Vue({
    el: 'body'
});
