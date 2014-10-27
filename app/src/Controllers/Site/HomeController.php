<?php namespace MyApp\Controllers\Site;

use View;

class HomeController extends BaseController
{

    public function index()
    {
        $view = View::make('site.home');

        return $view;
    }
}
