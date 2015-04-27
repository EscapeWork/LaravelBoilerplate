(function() {
    window.App = window.App || {};

    // this work with laravel form requests responses
    // usage: App.Messages.show(messages)
    App.Messages = {
        show: function(messages) {
            var msg = [];

            $.each(messages, function(i, message) {
                msg.push(message[0]);
            });

            alert(msg.join("\n"));
        }
    };

    // contact class
    App.Contact = function(form, options) {
        this.fetchElements = function() {
            this.$form   = $(form);
            this.$btn    = this.$form.find('.js-btn-submit');
            this.options = $.extend({conversionLabel: ''}, options);

            this.$form.find('input[type="tel"]').inputmask('(99) 9999.99999');
        };

        this.bindUIEvents = function() {
            this.$form.on('submit', $.proxy(this._onSubmit, this));
        };

        this._onSubmit = function(e) {
            e.preventDefault();

            this.send();
        };

        this.send = function() {
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

                    // google analytics
                    ga(
                        'send',
                        'event',
                        _this.options.conversionCategory,
                        _this.options.conversionAction,
                        _this.options.conversionLabel
                    );
                })
                .error(function(data) {
                    App.Messages.show(data.responseJSON);
                })
                .always(function() {
                    _this.$btn.prop('disabled', false);
                });
        };

        this.clearForm = function() {
            this.$form.find('.input').val('');
        };

        // inits
        this.fetchElements();
        this.bindUIEvents();
    };
})();
