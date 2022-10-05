<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\DB;
use App\Specialization;
use Illuminate\Support\Carbon;

class UserController extends Controller
{   
    // Restituisce una lista ordinata in modo casuale (orderByRaw('RAND()')) 
    // di tutti gli user con una sponsorizzazione attiva e la lista delle specializzazioni
    public function getSponsoredUsers() {
        $today = Carbon::today()->toDateTimeString();

        $users = User::select('users.id', 'users.name as user_name', 'users.email as user_email', 'users.address as user_address', 'users.photo as user_photo', 'users.slug as user_slug', 'users.phone_number as user_phone_number', 'users.service as user_service', 'users.curriculum as user_curriculum', 
                             'specializations.id as specialization_id', 'specializations.name as specialization_name', 'specializations.slug as specialization_slug',
                             'user_bundle.expired_date', 'bundles.id as bundle_id', 'bundles.name as bundle_name', 'bundles.duration as bundle_duration', 'bundles.price as bundle_price', 'bundles.code as bundle_code',
                             'reviews.id as review_id', 'reviews.author as review_author', 'reviews.content as review_content', 'reviews.vote as review_vote', 'reviews.created_at as review_created_at', 
                             'messages.id as message_id', 'messages.author as message_author', 'messages.email as message_email', 'messages.content as message_content', 'messages.created_at as message_created_at')
                       ->join('reviews', 'reviews.id', '=', 'reviews.user_id')
                       ->join('messages', 'messages.id', '=', 'messages.user_id')
                       ->join('specialization_user', 'users.id', '=', 'specialization_user.user_id')
                       ->join('specializations', 'specializations.id', '=', 'specialization_id')
                       ->join('user_bundle', 'users.id', '=', 'user_bundle.user_id')
                       ->join('bundles', 'bundles.id', '=', 'bundle_id')->where('user_bundle.expired_date', '>=', $today )->groupBy('users.id')
                       ->orderByRaw('RAND()')->get();
        
        $specializations = Specialization::all();

        if (isset($users)) {
            $data = [
                'success' => true,
                'results' => [
                    'users' => $users,
                    'specializations' => $specializations,
                ]
            ];
       } else {
            $data = [
                'success' => false
            ];
       }

        return response()->json($data);
    }
    
    // Restituisce tutti gli user per specializzazione e senza duplicati (groupBy('users.id')) 
    // mantenendo i record con la scadenza bundle più recente (orderBy('user_bundle.expired_date', 'desc')) 
    // e li ordina in modo che chi è sponsorizzato sia mostrato per primo (orderBy('user_bundle.expired_date', 'desc'))
    public function getUsersBySpecialization($specialization_slug) {
        $users = User::select('users.id', 'users.name as user_name', 'users.email as user_email', 'users.address as user_address', 'users.photo as user_photo', 'users.slug as user_slug', 'users.phone_number as user_phone_number', 'users.service as user_service', 'users.curriculum as user_curriculum', 
                             'specializations.id as specialization_id', 'specializations.name as specialization_name', 'specializations.slug as specialization_slug',
                             'user_bundle.expired_date', 'bundles.id as bundle_id', 'bundles.name as bundle_name', 'bundles.duration as bundle_duration', 'bundles.price as bundle_price', 'bundles.code as bundle_code',
                             'reviews.id as review_id', 'reviews.author as review_author', 'reviews.content as review_content', 'reviews.vote as review_vote', 'reviews.created_at as review_created_at', 
                            //  'messages.id as message_id', 'messages.author as message_author', 'messages.email as message_email', 'messages.content as message_content', 'messages.created_at as message_created_at',
                             DB::raw('count(reviews.user_id) as reviews_count'),
                             DB::table('users')->raw('avg(reviews.vote) as reviews_avg'))
                       ->join('reviews', 'users.id', '=', 'reviews.user_id')->groupBy('reviews.user_id')
                    //    ->join('messages', 'messages.id', '=', 'messages.user_id')
                       ->join('specialization_user', 'users.id', '=', 'specialization_user.user_id')
                       ->join('specializations', 'specializations.id', '=', 'specialization_id')->having('specializations.slug', '=', $specialization_slug)
                       ->leftJoin('user_bundle', 'users.id', '=', 'user_bundle.user_id')
                       ->leftJoin('bundles', 'bundles.id', '=', 'bundle_id')->groupBy('users.id')->orderBy('user_bundle.expired_date', 'desc') 
                       ->paginate(3000);

        // $users = DB::table('users')
        //             ->rightJoin('reviews', 'users.id', '=', 'reviews.user_id')->groupBy('reviews.user_id')
        //             ->join('specialization_user', 'users.id', '=', 'specialization_user.user_id')
        //             ->join('specializations', 'specializations.id', '=', 'specialization_id')->having('specializations.slug', '=', $specialization_slug)
        //             ->join('user_bundle', 'users.id', '=', 'user_bundle.user_id')
        //             ->join('bundles', 'bundles.id', '=', 'bundle_id')->groupBy('users.id')->orderBy('user_bundle.expired_date', 'desc')
        //             ->select('users.id', 'users.name as user_name', 'users.email as user_email', 'users.address as user_address', 'users.photo as user_photo', 'users.slug as user_slug', 'users.phone_number as user_phone_number', 'users.service as user_service', 'users.curriculum as user_curriculum', 
        //             'specializations.id as specialization_id', 'specializations.name as specialization_name', 'specializations.slug as specialization_slug',
        //             'user_bundle.expired_date', 'bundles.id as bundle_id', 'bundles.name as bundle_name', 'bundles.duration as bundle_duration', 'bundles.price as bundle_price', 'bundles.code as bundle_code',
        //             'reviews.id as review_id', 'reviews.author as review_author', 'reviews.content as review_content', 'reviews.vote as review_vote', 'reviews.created_at as review_created_at',
        //                     DB::table('reviews')->raw('count(reviews.user_id) as reviews_count'),
        //                     DB::table('users')->raw('avg(reviews.vote) as reviews_avg'))
        //             ->paginate(3000);
        // $users = User::with('specializations', 'messages', 'bundles')->whereHas('specializations', function($query) use ($specialization_slug) {
        //     $query->whereName($specialization_slug);
        //   })->where('user_bundle', 'user.id', '=', 'user_bundle.user_id')->get();

        // dd($users_ordered_by_expired_date[0]->pivot->expired_date);
        
        // METODO CORRETTO
        // $users = User::table('users')->select('users.*', 'user_bundle.expired_date')->join('bundles', 'bundles.id', '=', 'bundle_id')->orderBy('user_bundle.expired_date', 'desc')->join('specializations', 'specializations.id', '=', 'specialization_id')->having('specializations.slug', '=', $specialization_slug)->get();

        //     foreach($users as $user) {
        //         $reviews = Reviews::select(reviews.*, count(reviews.user_id) as review_number)->where('reviews.user_id', '=', $user.id)->get();
        //         $bundles = UserBundles::select(user_bundles.*)->where('user_bundles.user_id', '=', $user.id)->get();
        //         $user['reviews'] = $reviews;
        //         $user['bundles'] = $bundles;
        //     }

        if (isset($users)) {
            $data = [
                'success' => true,
                'results' => $users,
                // 'users_ordered' => $users
            ];
        } else {
                $data = [
                    'success' => false
                ];
        }

        return response()->json($data);
    }

    public function getUsersBySpecAndAvgVote($specialization_slug, $filter_avg_vote) {
        $users = User::select('users.id', 'users.name as user_name', 'users.email as user_email', 'users.address as user_address', 'users.photo as user_photo', 'users.slug as user_slug', 'users.phone_number as user_phone_number', 'users.service as user_service', 'users.curriculum as user_curriculum', 
                             'specializations.id as specialization_id', 'specializations.name as specialization_name', 'specializations.slug as specialization_slug',
                             'user_bundle.expired_date', 'bundles.id as bundle_id', 'bundles.name as bundle_name', 'bundles.duration as bundle_duration', 'bundles.price as bundle_price', 'bundles.code as bundle_code' )
                       ->join('specialization_user', 'users.id', '=', 'specialization_user.user_id')
                       ->join('specializations', 'specializations.id', '=', 'specialization_id')->where('specializations.slug', '=', $specialization_slug)
                       ->leftJoin('user_bundle', 'users.id', '=', 'user_bundle.user_id')
                       ->leftJoin('bundles', 'bundles.id', '=', 'bundle_id')->groupBy('users.id')->orderBy('user_bundle.expired_date', 'desc') 
                       ->paginate(200);

        if (isset($users)) {
            $data = [
                'success' => true,
                'results' => $users
            ];
       } else {
            $data = [
                'success' => false
            ];
       }

        return response()->json($data);
    }

    public function show($user_slug) {
        $user = User::where('slug', '=', $user_slug)->with('specializations', 'reviews', 'messages', 'bundles')->first();
        
        $user->count_reviews = $user->reviews->count();
        $user->avg_reviews = $user->reviews->avg('vote');
        
        if (isset($user)) {
            $data = [
                'success' => true,
                'results' => $user
            ];
        } else {
                $data = [
                    'success' => false
                ];
        }

        return response()->json($data);
    }
}
