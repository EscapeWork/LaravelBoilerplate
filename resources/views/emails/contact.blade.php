@component('mail::message')
# Contato do site -> {{ config('app.name') }}

Mensagem enviada no dia {{ date('d/m/Y') }} às {{ date('H:i:s') }}.

* **Nome:** {{ $name or '' }}
* **E-mail:** {{ $email or '' }}
* **Telefone**: {{ $phone or '' }}

**Mensagem:**
{{ $msg or '' }}
@endcomponent
