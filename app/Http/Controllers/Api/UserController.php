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
                       ->join('bundles', 'bundles.id', '=', 'bundle_id')->where('user_bundle.expired_date', '>=', $today ) 
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
        // $users = User::select('users.id', 'users.name as user_name', 'users.email as user_email', 'users.address as user_address', 'users.photo as user_photo', 'users.slug as user_slug', 'users.phone_number as user_phone_number', 'users.service as user_service', 'users.curriculum as user_curriculum', 
        //                      'specializations.id as specialization_id', 'specializations.name as specialization_name', 'specializations.slug as specialization_slug',
        //                      'user_bundle.expired_date', 'bundles.id as bundle_id', 'bundles.name as bundle_name', 'bundles.duration as bundle_duration', 'bundles.price as bundle_price', 'bundles.code as bundle_code',
        //                      DB::table('users')->raw('count(reviews.user_id) as reviews_count'),
        //                      DB::table('users')->raw('avg(reviews.vote) as reviews_avg'),
        //                      'reviews.id as review_id', 'reviews.author as review_author', 'reviews.content as review_content', 'reviews.vote as review_vote', 'reviews.created_at as review_created_at', 
        //                      'messages.id as message_id', 'messages.author as message_author', 'messages.email as message_email', 'messages.content as message_content', 'messages.created_at as message_created_at') 
        //                ->join('reviews', 'users.id', '=', 'reviews.user_id')->groupBy('reviews.user_id')
        //                ->join('messages', 'messages.id', '=', 'messages.user_id')
        //                ->join('specialization_user', 'users.id', '=', 'specialization_user.user_id')
        //                ->join('specializations', 'specializations.id', '=', 'specialization_id')->having('specializations.slug', '=', $specialization_slug)
        //                ->leftJoin('user_bundle', 'users.id', '=', 'user_bundle.user_id')
        //                ->leftJoin('bundles', 'bundles.id', '=', 'bundle_id')->groupBy('users.id')->orderBy('user_bundle.expired_date', 'desc') 
        //                ->paginate(3000);

        $users = User::with('specializations', 'messages', 'bundles')->whereHas('specializations', function($query) use ($specialization_slug) {
            $query->whereName($specialization_slug);
          })->where('user_bundle', 'user.id', '=', 'user_bundle.user_id')->get();

        $users_ordered_by_expired_date = [];

        // foreach($users as $user) {
        // //     // $users_ordered_by_expired_date[] = $user->bundles()->withPivot('expired_date')->first();
        //     $users_ordered_by_expired_date[] = $user;
            
        // }

        foreach($users as $user) {
            // dump($user_ordered->pivot->expired_date);
            // $user->bundles = $user->bundles->first(); 
            $users_ordered_by_expired_date[] = $user->bundles->first(); 
            // dump($user->bundles->first());
            // dump($user_ordered->bundles->first());
        }
        // dd($users_ordered_by_expired_date);
        // dd($users_ordered_by_expired_date[0]->pivot->expired_date);

            // $users = new User();
        // dd($users);
            //   $users = $users;

        // $users = User::find(3)->with('messages')->first();
        // $users = $users->messages()->paginate(2000);

        if (isset($users)) {
            $data = [
                'success' => true,
                'results' => $users,
                // 'users_ordered' => $users_ordered_by_expired_date
                'users_ordered' => $users
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
