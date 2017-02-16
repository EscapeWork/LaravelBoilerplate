// -------------------------------------------------------------------------
// requires
require('./bootstrap');
require('swiper');

const app = new Vue({
    el: 'body'
});

(function() {
    window.App = window.App || {};

    // Menu sidebar
    App.MenuResponsive = {
        init: function() {
            this.fetchElements();
            this.bindUIEvents();
        },

        fetchElements: function() {
            this.$body    = $('body');
            this.$menu    = $('#menu-sidebar');
            this.$btnOpen = $('.js-btn-menu-responsive');
        },

        bindUIEvents: function() {
            var _this = this;

            this.$btnOpen.on('click', function() {
                _this.toggle();

                if (_this.$btnOpen.hasClass('active')) {
                    _this.listenToCloseEvent();
                }
            });
        },

        toggle: function() {
            this.$btnOpen.toggleClass('active');
            this.$body.toggleClass('cbp-spmenu-push-toright');
            this.$menu.toggleClass('cbp-spmenu-open');
        },

        listenToCloseEvent: function() {
            var _this = this;

            window.setTimeout(function() {
                _this.$body.on('click.menu', function(e) {
                    if ($(e.target).closest('.cbp-spmenu').length === 0) {
                        _this.toggle();
                        _this.$body.off('click.menu');
                    }
                });
            }, 50);
        }
    };

    // Slider Banner
    App.SliderBanner = function() {
        return {
            init: function(){
                var swiperSlider = new Swiper ('.swiper-slider', {
                    loop: true,
                    pagination: '.slider-pagination',
                    paginationClickable: true,
                    //paginationType: 'fraction',
                    paginationType: 'progress',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    effect: 'fade',
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false
                });
            }
        };
    }();

    // Gallery
    App.Gallery = function() {
        return {
            init: function(){
                var swiperGallery = new Swiper('.swiper-gallery', {
                    pagination: '.gallery-pagination',
                    paginationClickable: true,
                    slidesPerView: 3,
                    spaceBetween: 30,
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        }
                    }
                });
            }
        };
    }();


    //init
    App.MenuResponsive.init();
    App.SliderBanner.init();
    App.Gallery.init();
})();
