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

Route::get('/', array('as' => 'home', function()
{
    return View::make('home.home');
}));

App::error(function(Symfony\Component\HttpKernel\Exception\NotFoundHttpException $exception)
{
    return View::make('site.errors.404');
});
