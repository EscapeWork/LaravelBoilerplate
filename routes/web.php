<?php
/*
|--------------------------------------------------------------------------
| - Arquivo de rotas da aplicação
|--------------------------------------------------------------------------
| Descrição do site
| Desenvolvido por: Agência Escape <www.escape.ppg.br>
|--------------------------------------------------------------------------
*/

# home
Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);

# contact
Route::post('contato', ['as' => 'contact.send', 'uses' => 'ContactController@send']);
