<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    "accepted"             => "The :attribute must be accepted.",
    "active_url"           => "The :attribute is not a valid URL.",
    "after"                => "The :attribute must be a date after :date.",
    "alpha"                => "The :attribute may only contain letters.",
    "alpha_dash"           => "The :attribute may only contain letters, numbers, and dashes.",
    "alpha_num"            => "The :attribute may only contain letters and numbers.",
    "array"                => "The :attribute must be an array.",
    "before"               => "The :attribute must be a date before :date.",
    "between"              => [
        "numeric" => "The :attribute must be between :min and :max.",
        "file"    => "The :attribute must be between :min and :max kilobytes.",
        "string"  => "The :attribute must be between :min and :max characters.",
        "array"   => "The :attribute must have between :min and :max items.",
    ],
    "boolean"              => "The :attribute field must be true or false.",
    "confirmed"            => "The :attribute confirmation does not match.",
    "date"                 => "The :attribute is not a valid date.",
    "date_format"          => "The :attribute does not match the format :format.",
    "different"            => "The :attribute and :other must be different.",
    "digits"               => "The :attribute must be :digits digits.",
    "digits_between"       => "The :attribute must be between :min and :max digits.",
    "email"                => "The :attribute must be a valid email address.",
    "filled"               => "The :attribute field is required.",
    "exists"               => "The selected :attribute is invalid.",
    "image"                => "The :attribute must be an image.",
    "in"                   => "The selected :attribute is invalid.",
    "integer"              => "The :attribute must be an integer.",
    "ip"                   => "The :attribute must be a valid IP address.",
    "max"                  => [
        "numeric" => "The :attribute may not be greater than :max.",
        "file"    => "The :attribute may not be greater than :max kilobytes.",
        "string"  => "The :attribute may not be greater than :max characters.",
        "array"   => "The :attribute may not have more than :max items.",
    ],
    "mimes"                => "The :attribute must be a file of type: :values.",
    "min"                  => [
        "numeric" => "The :attribute must be at least :min.",
        "file"    => "The :attribute must be at least :min kilobytes.",
        "string"  => "The :attribute must be at least :min characters.",
        "array"   => "The :attribute must have at least :min items.",
    ],
    "not_in"               => "O campo :attribute selecionado é inválido.",
    "numeric"              => "O campo :attribute precisa ser um número.",
    "regex"                => "O formato do campo :attribute é inválido.",
    "required"             => "O campo :attribute é obrigatório.",
    "required_if"          => "O campo :attribute é obrigatório quando o campo :other for :value.",
    "required_with"        => "O campo :attribute é obrigatório quando o campo :values for preenchido.",
    "required_with_all"    => "O campo :attribute é obrigatório quando os campos :values forem preenchidos.",
    "required_without"     => "O campo :attribute é obrigatório quando o campo :values não for preenchido.",
    "required_without_all" => "O campo :attribute é obrigatório quando nenhum dos campos :values forem preenchidos.",
    "same"                 => "O campo :attribute e o campo :other precisam ser iguais.",
    "size"                 => [
        "numeric" => "O campo :attribute precisa ter :size dígitos.",
        "file"    => "O campo :attribute precisa ter :size kilobytes.",
        "string"  => "O campo :attribute precisa ter :size caracteres.",
        "array"   => "O campo :attribute precisa conter :size itens.",
    ],
    "unique"               => "O campo :attribute já está sendo utilizado.",
    "url"                  => "O campo :attribute precisa ser uma URL válida",
    "timezone"             => "The :attribute must be a valid zone.",
    "image_array"          => "Por favor, envie somente imagens",

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [
        'title'       => 'título',
        'name'        => 'nome',
        'description' => 'descrição',
        'active'      => 'active',
        'bio'         => 'resumo'
    ],

];
