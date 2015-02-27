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
})();
