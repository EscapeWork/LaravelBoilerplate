<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'  => ['required'],
            'email' => ['required', 'email'],
            'phone' => ['required'],
            'msg'   => ['required'],
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
