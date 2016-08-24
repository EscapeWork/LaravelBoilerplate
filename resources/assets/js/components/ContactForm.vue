<template>
    <form action="/contato" method="post" class="form form-horizontal"
          v-on:submit.prevent()="send()">
        <fieldset class="contact-form-fieldset">
            <div class="form-group">
                <label for="name" class="form-group-label">Nome</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control" maxlength="255" required>
            </div><!-- .form-group -->

            <div class="form-group">
                <label for="email" class="form-group-label">E-mail</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control" maxlength="255" required>
            </div><!-- .form-group -->

            <div class="form-group">
                <label for="phone" class="form-group-label">Telefone</label>
                <input type="tel" name="phone" id="phone" v-model="phone" class="form-control" maxlength="255" required>
            </div><!-- .form-group -->

            <div class="form-group">
                <label for="msg" class="form-group-label">Mensagem</label>
                <textarea name="msg" id="msg" v-model="msg" class="form-control" rows="5" required></textarea>
            </div><!-- .form-group -->
        </fieldset><!-- .contact-form-fieldset -->

        <button type="button" class="btn btn-primary" v-on:click="send()" :disabled="loading">Enviar mensagem</button>
    </form><!-- .contact-form -->
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                name: null,
                email: null,
                phone: null,
                msg: null
            }
        },

        methods: {
            send() {
                this.loading = true;

                this.$http.post('/contato', this.getData()).then((response) => {
                    this.loading = false;
                    console.log(response);
                }, (error) => {
                    this.loading = false;
                });
            },

            getData() {
                return {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    msg: this.msg
                }
            }
        },

        ready() {}
    }
</script>
