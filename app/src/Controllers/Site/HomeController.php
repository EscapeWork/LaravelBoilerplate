<?php namespace App\Controllers\Site;

use View;

class HomeController extends BaseController
{

    public function index()
    {
        return View::make('site.home');
    }
}
