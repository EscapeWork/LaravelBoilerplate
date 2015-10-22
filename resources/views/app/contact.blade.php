@extends('app.master')

{{-- Este formulário é só um exemplo, modifique como for necessário --}}

@section('seo')
    <title>Contato</title>
    <link rel="canonical" href="{{ route('contact.index') }}">
@stop

@section('content')
    <section class="container">
        <h1>Contato</h1>

        <form action="{{ route('contact.send') }}" method="post" class="contact-form js-contact-form">
            {!! Form::token() !!}
            {!! Honeypot::generate('honeyform', 'honeyform_time') !!}

            <fieldset class="contact-form-fieldset">
                <div class="form-group">
                    <label for="name" class="form-group-label">Nome</label>
                    <input type="text" name="name" id="name" class="form-control" maxlength="255" required>
                </div><!-- .form-group -->

                <div class="form-group">
                    <label for="email" class="form-group-label">E-mail</label>
                    <input type="email" name="email" id="email" class="form-control" maxlength="255" required>
                </div><!-- .form-group -->

                <div class="form-group">
                    <label for="phone" class="form-group-label">Telefone</label>
                    <input type="tel" name="phone" id="phone" class="form-control" maxlength="255" required>
                </div><!-- .form-group -->

                <div class="form-group">
                    <label for="msg" class="form-group-label">Mensagem</label>
                    <textarea name="msg" id="msg" class="form-control" rows="5" required></textarea>
                </div><!-- .form-group -->
            </fieldset><!-- .contact-form-fieldset -->

            <div class="form-actions">
                <button type="submit" class="btn btn-primary btn-large btn-pointer js-btn-submit">Enviar mensagem</button>
            </div><!-- .form-actions -->
        </form><!-- .contact-form -->
    </section>
@stop

@section('scripts')
    @parent
    <script type="text/javascript" src="{{ asset('assets/js/vendor/jquery.inputmask.min.js') }}"></script>
    <script type="text/javascript" src="{{ Asset::v('assets/js/app/contact.min.js') }}"></script>
@stop
