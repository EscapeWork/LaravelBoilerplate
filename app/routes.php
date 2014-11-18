<?php
/*
|--------------------------------------------------------------------------
| escapecriativacao/laravel-bootstrap - Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', ['as' => 'home', 'uses' => 'App\Controllers\Site\HomeController@index']);

# 404
App::missing(function($exception)
{
    return App::make('App\Controllers\Site\ErrorsController')->error404();
});
