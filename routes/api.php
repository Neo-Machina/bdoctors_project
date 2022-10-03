<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/sponsored-users', 'Api\UserController@getSponsoredUsers');
Route::get('/users-by-specialization/{specialization_slug}', 'Api\UserController@getUsersBySpecialization');
Route::get('/users-by-specialization-and-average-vote/{specialization_slug}/{filter_avg_vote}', 'Api\UserController@getUsersBySpecAndAvgVote');

Route::get('/users/{slug}', 'Api\UserController@show');
