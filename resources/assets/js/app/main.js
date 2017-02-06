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
    App.Menu = function() {
        return {
            init: function(){
                var menuLeft = document.getElementById('menu-sidebar'),
                    showLeftPush = document.getElementById('show-menu-push'),
                    body = document.body;

                showLeftPush.onclick = function() {
                    classie.toggle( this, 'active' );
                    classie.toggle( body, 'cbp-spmenu-push-toright' );
                    classie.toggle( menuLeft, 'cbp-spmenu-open' );
                };
            }
        };
    }();

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
