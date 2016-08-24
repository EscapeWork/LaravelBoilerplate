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

    App.Messages.init();
})();
