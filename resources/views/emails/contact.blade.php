@extends('emails.master')

@section('content')
    <h3 style="font-size: 15px; line-height: 18px; margin-bottom: 10px;">Contato do site -> {{ config('mail.from.name') }}</h3>
    <p style="font-size: 13px; line-height: 18px; margin-bottom: 30px;">Contato efetuado no dia {{ date('d/m/Y') }} as {{ date('H:i:s') }}.</p>

    <p style="font-size: 13px; line-height: 22px; margin-bottom: 0px;">
    <strong>Nome:</strong> {{ $name or '' }}<br />
    <strong>E-mail:</strong> {{ $email or '' }}<br />
    <strong>Telefone:</strong> {{ $phone or '' }}<br />
    <strong>Assunto:</strong> {{ $subject or '' }}<br />

    <p style="font-size: 13px; line-height: 18px; margin-bottom: 0px;"><strong>Mensagem:</strong> <br />
    {{ $msg or '' }}</p>
@stop
