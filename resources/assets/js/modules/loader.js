window.App = window.App || {};

App.Loader = {
    init: function() {
        this.$loader = $('.loader');
    },

    show: function() {
        this.$loader.show();
    },

    hide: function() {
        this.$loader.hide();
    }
};

App.Loader.init();
