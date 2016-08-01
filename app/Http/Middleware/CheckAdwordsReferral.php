<?php

namespace App\Http\Middleware;

use Closure, Session;

class CheckAdwordsReferral
{

    /**
     * Create a new filter instance.
     *
     * @param  Guard  $auth
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->has('glcid')) {
            Session::put('came_from_adwords', 1);
        }

        return $next($request);
    }
}
