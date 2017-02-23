<?php

namespace App\Http\Controllers\App;

use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactSent;

class ContactController extends Controller
{

    public function send(ContactRequest $request)
    {
        Mail::to(config('mail.to'))
            ->send(new ContactSent($request->all()));

        return response([
            'message' => 'Sua mensagem foi enviada com sucesso!',
        ]);
    }
}
