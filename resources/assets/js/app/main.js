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
    App.Menu = {
        init: function() {
                var menuLeft = document.getElementById('menu-sidebar'),
                    showLeftPush = document.getElementById('show-menu-push'),
                    body = document.body;

                $('#show-menu-push').on('click', function() {
                    $(this).toggleClass('active');
                    $(body).toggleClass('cbp-spmenu-push-toright');
                    $('#menu-sidebar').toggleClass('cbp-spmenu-open');
                });
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
    App.Menu.init();
    App.SliderBanner.init();
    App.Gallery.init();
})();
