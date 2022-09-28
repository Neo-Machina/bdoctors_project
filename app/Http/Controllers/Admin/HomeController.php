<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index(Request $request) {
        $user_id = $request->user();

        $user = Auth::user();

        $data = [
            'user' => $user
        ];

        return view('admin.home', $data);
    }
}
