<?php

namespace App\Http\Controllers\App;

use App\Http\Requests\ContactRequest;
use App\Services\ContactSenderService;

class ContactController extends Controller
{

    public function send(ContactRequest $request, ContactSenderService $sender)
    {
        $sender->send($request->all());

        return response([
            'message' => 'Sua mensagem foi enviada com sucesso!',
        ]);
    }
}
