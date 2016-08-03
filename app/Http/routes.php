<?php
/*
|--------------------------------------------------------------------------
| Descrição do site
| Desenvolvido por: Agência Escape <www.escape.ppg.br>
|--------------------------------------------------------------------------
*/

Route::group(['namespace' => 'App', 'middleware' => ['web']], function() {
    # home
    Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);

    # contact
    Route::post('contato', ['as' => 'contact.send', 'uses' => 'ContactController@send']);
});


# manager
Route::group([
    'prefix'     => config('manager.url'),
    'middleware' => ['web', 'manager.authenticated'],
    'as'         => 'manager.',
    'namespace'  => 'Manager'
], function()
{
    # your manager routes
});
