(function() {
    window.App = window.App || {};

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
})();
