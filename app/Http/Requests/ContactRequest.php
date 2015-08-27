<?php

namespace App\Http\Requests;

class ContactRequest extends Request
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'           => ['required'],
            'email'          => ['required', 'email'],
            'phone'          => ['required'],
            'msg'            => ['required'],
            'honeyform'      => ['honeypot'],
            'honeyform_time' => ['required', 'honeytime:5'],
        ];
    }

    public function messages()
    {
        return [
            'name.required'  => 'Preencha seu nome',
            'email.required' => 'Preencha seu email',
            'email.email'    => 'Digite um email válido',
            'phone.required' => 'Preencha seu telefone',
            'msg.required'   => 'Preencha a mensagem',
        ];
    }
}
