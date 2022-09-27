<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Specialization;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {   
        $specialization_ids = []; 
            $specializations_array = Specialization::all();

            for($i=1; $i < rand(1, 3); $i++) { 
                $id_random = rand(1, count($specializations_array));

                if(!in_array( $id_random, $specialization_ids)) {
                    $specialization_ids[] = $id_random;
                } 

                dd($specialization_ids);
            }
        // dd($specialization_ids);
        return view('home');
    }
}
