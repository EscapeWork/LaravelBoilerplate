(function() {
    window.App = window.App || {};

    // Contact
    App.Contact = {
        init: function() {
            this.fetchElements();
            this.bindUIEvents();
        },

        fetchElements: function() {
            this.$form = $('.js-contact-form');
            this.$btn  = this.$form.find('.js-btn-submit');

            this.$form.find('input[name="phone"]').inputmask('(99) 9999.99999');
        },

        bindUIEvents: function() {
            this.$form.on('submit', $.proxy(this._onSubmit, this));
        },

        _onSubmit: function(e) {
            e.preventDefault();

            this.send();
        },

        send: function() {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: _this.$form.prop('action'),
                data: _this.$form.serialize(),

                beforeSend: function() {
                    _this.$btn.prop('disabled', true);
                }
            })
                .success(function(data) {
                    alert(data.message);

                    _this.clearForm();

                    // google analytics (uncomment this if installed)
                    // ga('send', 'event', 'Contato', 'Enviado');
                })
                .error(function(data) {
                    App.Messages.show(data.responseJSON);
                })
                .always(function() {
                    _this.$btn.prop('disabled', false);
                });
        },

        clearForm: function() {
            this.$form.find('.input').val('');
        }
    };

    // inits
    App.Contact.init();
})();
