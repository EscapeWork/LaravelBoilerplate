(function() {
    window.App = window.App || {};

    App.AdwordsConversion = {
        register: function(google_conversion_id, google_conversion_label) {
            var image = new Image(1, 1);
            image.src = "//www.googleadservices.com/pagead/conversion/" + google_conversion_id + "/?label=" + google_conversion_label + "&script=0";
        }
    };
})();
