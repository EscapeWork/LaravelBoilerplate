(function() {
    window.App = window.App || {};

    // =============================================================================
    // this work with laravel form requests responses
    // usage: App.Messages.show(messages)
    App.Messages = {
        init: function() {
            this.$modal = $('#modal-message');
            this.$body  = this.$modal.find('.js-modal-body');
        },

        errors: function(messages) {
            var msg = [];

            $.each(messages, function(i, message) {
                msg.push(message[0]);
            });

            this.show(msg.join('<br>'));
        },

        message: function(message) {
            this.show(message);
        },

        show: function(content) {
            this.$body.html(content);
            this.$modal.modal('show');
        }
    };

    // =============================================================================
    // Contact class
    // - If you will not use this, DELETE IT!
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
                    ga(
                        'send',
                        'event',
                        _this.options.conversionCategory,
                        _this.options.conversionAction,
                        _this.options.conversionLabel
                    );
                })
                .error(function(data) {
                    App.Messages.errors(data.responseJSON);
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

    // =============================================================================
    // Banners class
    // - If you will not use this, DELETE IT!
    App.Banners = function(container) {
        this.fetchElements = function() {
            this.active     = 1;
            this.interval   = null;

            this.$container = $(container);

            // a lista de banners deve ter a classe .js-banners-list
            this.$list      = this.$container.find('.js-banners-list');
            this.$banners   = this.$list.find('[data-banner]');

            // o menu deve ter a classe .js-banners-menu
            this.$menu  = this.$container.find('.js-banners-menu');
            this.$links = this.$menu.find('[data-banner]');

            this.$btnPrev = this.$container.find('.js-banners-btn-prev');
            this.$btnNext = this.$container.find('.js-banners-btn-next');
        };

        this.bindUIEvents = function() {
            var _this = this;

            this.$btnPrev.on('click', function(e) {
                _this.prev();
                _this.restartInterval();
            });

            this.$btnNext.on('click', function(e) {
                _this.next();
                _this.restartInterval();
            });

            if (this.$links.size() > 0) {
                this.$links.on('click', function(e) {
                    _this.show($(this).data('banner'));
                    _this.restartInterval();
                });
            }
        };

        this.next = function() {
            this.active++;

            if (this.active > this.$banners.size()) {
                this.active = 1;
            }

            this.show(this.active);
        };

        this.prev = function() {
            this.active--;

            if (this.active < 1) {
                this.active = this.$banners.size();
            }

            this.show(this.active);
        };

        this.show = function(banner) {
            var $banner = this.$banners.filter('[data-banner="'+banner+'"]'),
                $link   = this.$links.filter('[data-banner="'+banner+'"]');

            this.$banners.not($banner).fadeOut(250);
            $banner.fadeIn(250);

            this.$links.not($link).removeClass('active');
            $link.addClass('active');
        };

        this.initInterval = function() {
            var _this = this;

            this.interval = window.setInterval(function() {
                _this.next();
            }, 5000);
        };

        this.restartInterval = function() {
            window.clearInterval(this.interval);
            this.initInterval();
        };

        this.fetchElements();
        this.bindUIEvents();
        this.initInterval();
    };

    // inits
    App.Messages.init();
})();
