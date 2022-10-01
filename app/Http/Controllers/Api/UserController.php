<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index() {
        $users = User::paginate(6);

        if ($users) {
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

    public function show($slug) {
        $user = User::where('slug', '=', $slug)->with(['specializations'])->first();

        if ($user) {
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
