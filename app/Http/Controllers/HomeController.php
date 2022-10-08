<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use Faker\Generator as Faker;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {   
        return view('show');
    }

    public function debug(Faker $faker)
    {   
        // $response = Http::get('https://randomuser.me/api/');
        //     $apiResponse = $response->json();
        //     dd($apiResponse);

        $date_faker_origin = $faker->dateTimeBetween('-3 years', '-1 day');
        $date_faker = Carbon::parse($date_faker_origin->format('Y-m-d H:i:s'))->toString();

        dump($date_faker);
        dump('2022-10-08 10:07:18');

        // return view('show');
    }
}
