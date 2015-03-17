@extends('app.master')

@section('styles')
    @parent

    <link href='//fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
    <style>
        body {
            font-family: 'Lato';
        }

        .home-sample {
            margin: 100px 0 70px 0;
            text-align: center;
        }

        h1 {
            margin: 0 0 75px;
            font-weight: normal;;
            font-size: 70px;
            color: #999;
        }

        p {
            margin: 50px 0 0 0;
            font-size: 30px;
            color: #666;
        }
    </style>
@stop

@section('content')
    <section class="container">
        <div class="home-sample">
            <h1>Hello from Agência Escape</h1>

            <a href="http://www.escape.ppg.br" target="_blank">
                <img width="500" src="https://s3.amazonaws.com/escape-criativacao/imagens/logotipos/escape-logotipo-azul.png" alt="Agência Escape">
            </a>

            <p>If not now, when? If not you, who?</p>
        </div><!-- .home-sample -->
    </section>
@stop
