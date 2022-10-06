<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Message;
use App\Review;
use Illuminate\Support\Facades\DB;

class StatisticController extends Controller
{
    public function getStatisticsUser(Request $request) {
        $user = $request->user();
        
        $messages = Message::selectRaw('year(created_at) as year, month(created_at) as month, count(*) as count_messages')
                            ->where('user_id', $user->id)
                            ->groupBy('year', 'month')
                            ->orderBy('year', 'desc')
                            ->get();

        $reviews = Review::selectRaw('year(created_at) as year, month(created_at) as month, count(*) as count_reviews')
                            ->where('user_id', $user->id)
                            ->groupBy('year', 'month')
                            ->orderBy('year', 'desc')
                            ->get();

        $data = [
            'user' => $user,
            'messages' => $messages,
            'reviews' => $reviews
        ];
        return view('admin.statistics.index', $data);
    }
}
