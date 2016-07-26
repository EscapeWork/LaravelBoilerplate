<?php

namespace App\Services;

use Illuminate\Mail\Mailer;

class ContactSenderService
{

    /**
     * @var Illuminate\Mail\Mailer
     */
    protected $mailer;

    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    public function send($data)
    {
        $this->mailer->send('emails.contact', $data, function($m) use ($data)
        {
            $m->subject('Contato do site')
              ->to(config('mail.to'))
              ->replyTo($data['email']);
        });
    }
}
