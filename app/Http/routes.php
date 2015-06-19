<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
*/

Route::group(['namespace' => 'App'], function() {
    # home
    Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);

    # contact
    Route::get('contato', ['as' => 'contact.index', 'uses' => 'ContactController@index']);
    Route::post('contato', ['as' => 'contact.send', 'uses' => 'ContactController@send']);
});


# manager
Route::group([
    'prefix'     => config('manager.url'),
    'middleware' => 'manager.authenticated',
    'as'         => 'manager.',
    'namespace'  => 'Manager'
], function()
{

});
