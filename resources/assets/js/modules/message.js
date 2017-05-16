window.App = window.App || {};

// =============================================================================
// this work with laravel form requests responses
// usage: App.Messages.show(messages)
App.Messages = {
    errors: function(messages) {
        var msg = [];

        $.each(messages, function(i, message) {
            msg.push(message[0]);
        });

        swal({
            title: 'Ocorreram alguns erros:',
            html: true,
            text: msg.join('<br>'),
            type: 'warning'
        });
    },

    message: function(message, title) {
        if (typeof(title) === 'undefined') {
            title = 'Mensagem';
        }

        swal({
            title: title,
            text: message,
            type: 'success'
        });
    },

    show: function(message, title) {
        this.message(message, title);
    }
};
