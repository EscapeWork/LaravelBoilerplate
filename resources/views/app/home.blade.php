@extends('app.master')

@section('content')
    <section class="container">
        <div class="text-center">
            <h1>Hello from Agência Escape</h1>

            <a href="http://www.escape.ppg.br" target="_blank">
                <img width="400" src="https://s3.amazonaws.com/escape-criativacao/imagens/logotipos/escape-logotipo-azul.png" alt="Agência Escape">
            </a>

            <p>Now with Font Awesome icons support
            <a href="https://www.facebook.com/escapecria" target="_blank"><i class="fa fa-facebook"></i></a>
            <a href="https://instagram.com/escapecria" target="_blank"><i class="fa fa-instagram"></i></a>
            </p>
        </div><!-- .text-center -->

        <contact-form></contact-form>
    </section>
@stop
