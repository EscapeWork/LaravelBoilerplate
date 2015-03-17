<?php namespace App\Http\Controllers\App;

use App\Http\Requests\ContactRequest;
use App\Services\ContactService;

class ContactController extends Controller
{

    public function send(ContactRequest $request, ContactService $contact)
    {
        $contact->send($request->all());

        return response([
            'message' => 'Sua mensagem foi enviada com sucesso!',
        ]);
    }
}
