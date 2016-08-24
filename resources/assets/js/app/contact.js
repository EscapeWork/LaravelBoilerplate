(function() {
    window.App = window.App || {};

    App.ContactForm = new App.Contact('.js-contact-form', {
        conversionCategory: 'Contato',
        conversionAction: 'Enviado'
    });
})();
