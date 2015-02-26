<?php namespace App\Http\Controllers\App;

class HomeController extends Controller
{

	public function index()
	{
		return view('app.home');
	}
}
