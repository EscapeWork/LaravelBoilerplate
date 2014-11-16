<?php namespace MyApp\Controllers\Site;

use Response;

class ErrorsController extends BaseController
{

    public function error404()
    {
        return Response::view('site.errors.404', [], 404);
    }

    public function errorFatal()
    {
        return Response::view('site.errors.fatal', [], 500);
    }
}
