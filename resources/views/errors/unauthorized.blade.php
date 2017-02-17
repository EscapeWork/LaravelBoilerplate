@extends('app.master')

@section('content')
    <section class="container text-center">
        <br><br>

        <h1 class="content-title">Indisponível</h1>

        <div class="content-text">
            <p>A página que você tentou acessar não está mais disponível.</p>
            <p><a href="{{ route('home') }}" class="btn btn-primary">Voltar a página inicial</a></p>
        </div>
    </section>
@stop
