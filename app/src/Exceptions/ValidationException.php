<?php namespace App\Exceptions;

use Illuminate\Support\MessageBag;
use InvalidArgumentException;

class ValidationException extends InvalidArgumentException
{

    /**
     * The validation errors
     * @var array
     */
    protected $validationErrors;

    public function setValidationErrors(MessageBag $validationErrors)
    {
        $this->validationErrors = $validationErrors;
    }

    public function getValidationErrors()
    {
        return $this->validationErrors;
    }
}
