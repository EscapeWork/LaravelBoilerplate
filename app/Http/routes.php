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

Route::get('/', ['as' => 'home', 'uses' => 'App\HomeController@index']);

# contact
Route::get('contato', ['as' => 'contact.index', 'uses' => 'App\ContactController@index']);
Route::post('contato', ['as' => 'contact.send', 'uses' => 'App\ContactController@send']);
