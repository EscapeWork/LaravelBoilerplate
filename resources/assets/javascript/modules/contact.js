(function() {
    window.App = window.App || {};

    App.Contact = function(form, options) {
        this.fetchElements = function() {
            this.$form   = $(form);
            this.$btn    = this.$form.find('.js-btn-submit');
            this.options = $.extend({conversionLabel: ''}, options);
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
                    App.Messages.message(data.message);
                    _this.clearForm();

                    // google analytics
                    if (typeof ga !== 'undefined') {
                        ga(
                            'send',
                            'event',
                            _this.options.conversionCategory,
                            _this.options.conversionAction,
                            _this.options.conversionLabel
                        );
                    }
                })
                .error(function(data) {
                    if (data !== undefined) {
                        App.Messages.errors(data.responseJSON);
                    }
                })
                .always(function() {
                    _this.$btn.prop('disabled', false);
                });
        };

        this.clearForm = function() {
            this.$form.find('.form-control').val('');
        };

        // inits
        this.fetchElements();
        this.bindUIEvents();
    };
})();
