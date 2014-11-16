<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', ['as' => 'home', 'uses' => 'MyApp\Controllers\Site\HomeController@index']);

# 404
App::missing(function($exception)
{
    return App::make('MyApp\Controllers\Site\ErrorsController')->error404();
});
