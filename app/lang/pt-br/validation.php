<?php

return array(

	/*
	|--------------------------------------------------------------------------
	| Validation Language Lines
	|--------------------------------------------------------------------------
	|
	| O following language lines contain O default error messages used by
	| O validator class. Some of these rules have multiple versions such
	| such as O size rules. Feel free to tweak each of these messages.
	|
	*/

	"accepted"         => "O :attribute precisa ser aceito.",
	"active_url"       => "O :attribute não é uma URL válida.",
	"after"            => "O :attribute must be a date after :date.",
	"alpha"            => "O :attribute may only contain letters.",
	"alpha_dash"       => "O :attribute may only contain letters, numbers, and dashes.",
	"alpha_num"        => "O :attribute may only contain letters and numbers.",
	"before"           => "O :attribute must be a date before :date.",
	"between"          => array(
		"numeric" => "O :attribute must be between :min - :max.",
		"file"    => "O :attribute must be between :min - :max kilobytes.",
		"string"  => "O :attribute must be between :min - :max characters.",
	),
	"confirmed"        => "O :attribute confirmation does not match.",
	"date"             => "O :attribute is not a valid date.",
	"date_format"      => "O :attribute does not match O format :format.",
	"different"        => "O :attribute and :other must be different.",
	"digits"           => "O :attribute must be :digits digits.",
	"digits_between"   => "O :attribute must be between :min and :max digits.",
	"email"            => "O :attribute format is invalid.",
	"exists"           => "O selected :attribute is invalid.",
	"image"            => "O :attribute must be an image.",
	"in"               => "O selected :attribute is invalid.",
	"integer"          => "O :attribute must be an integer.",
	"ip"               => "O :attribute must be a valid IP address.",
	"max"              => array(
		"numeric" => "O :attribute may not be greater than :max.",
		"file"    => "O :attribute may not be greater than :max kilobytes.",
		"string"  => "O :attribute may not be greater than :max characters.",
	),
	"mimes"            => "O :attribute must be a file of type: :values.",
	"min"              => array(
		"numeric" => "O :attribute must be at least :min.",
		"file"    => "O :attribute must be at least :min kilobytes.",
		"string"  => "O :attribute must be at least :min characters.",
	),
	"not_in"           => "O selected :attribute is invalid.",
	"numeric"          => "O :attribute must be a number.",
	"regex"            => "O :attribute format is invalid.",
	"required"         => "O :attribute é obrigatório.",
	"required_if"      => "O :attribute field is required when :other is :value.",
	"required_with"    => "O :attribute field is required when :values is present.",
	"required_without" => "O :attribute field is required when :values is not present.",
	"same"             => "O :attribute and :other must match.",
	"size"             => array(
		"numeric" => "O :attribute must be :size.",
		"file"    => "O :attribute must be :size kilobytes.",
		"string"  => "O :attribute must be :size characters.",
	),
	"unique"           => "O :attribute has already been taken.",
	"url"              => "O :attribute format is invalid.",

	/*
	|--------------------------------------------------------------------------
	| Custom Validation Language Lines
	|--------------------------------------------------------------------------
	|
	| Here you may specify custom validation messages for attributes using the
	| convention "attribute.rule" to name O lines. This makes it quick to
	| specify a specific custom language line for a given attribute rule.
	|
	*/

	'custom' => array(),

	/*
	|--------------------------------------------------------------------------
	| Custom Validation Attributes
	|--------------------------------------------------------------------------
	|
	| O following language lines are used to swap attribute place-holders
	| with something more reader friendly such as E-Mail Address instead
	| of "email". This simply helps us make messages a little cleaner.
	|
	*/

	'attributes' => array(),

);
