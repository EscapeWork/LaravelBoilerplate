<?php namespace MyApp\Controllers\Site;

use View;

class HomeController extends BaseController
{

    public function index()
    {
        return View::make('site.home');
    }
}
