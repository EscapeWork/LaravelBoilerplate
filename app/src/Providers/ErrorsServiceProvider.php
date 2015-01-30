<?php namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Exceptions\ValidationException;
use Exception;

class ErrorsServiceProvider extends ServiceProvider
{

    public function register()
    {
        $app = $this->app;

        $this->app->error(function(Exception $exception) use($app)
        {
            if (! $app['config']['app.debug']) {
                return $app->make('App\Controllers\Site\ErrorsController')->errorFatal();
            }
        });

        $this->app->error(function(NotFoundHttpException $exception) use($app)
        {
            return $app->make('App\Controllers\Site\ErrorsController')->error404();
        });

        $this->app->error(function(ValidationException $e)
        {
            return Redirect::back()->withInput()->withErrors($e->getValidationErrors());
        });
    }
}
