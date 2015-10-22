@extends('emails.master')

@section('content')
    <p>Olá, </p>

    <p>Para refazer sua senha no site da SEEAATESP, acesse o link abaixo: <br>
    {{ route('associates.password.index', $token) }}.</p>

    <p>Este link para refazer sua senha vai expirar em {{ config('auth.password.expire') }} minutos.</p>
    <p>Caso vocë não tenha solicitado para refazer sua senha, ignore este e-mail.</p>

    <p>Qualquer dúvida <a href="{{ route('contact.index') }}">entre em contato</a> conosco.</p>
@stop
