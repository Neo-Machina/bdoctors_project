<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Message;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // User Id
        $id = $request->user()->id;
        
        $user = User::findOrFail($id)->with('specializations', 'reviews', 'messages', 'bundles')->first();
        $messages = $user->messages()->paginate(2);
        
        // dd($user->messages()->paginate(2));
        // dd($user);

        if (isset($user)) {
            $data = [
                'messages' => $messages,
                // 'results' => [
                //     'user' => $user,
                //     'messages' => $messages
                // ],
                'user' => $user
            ];
        } else {
            $data = [
                'success' => false
            ];
        }

        return view('admin.messages.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $message_to_delete = Message::findOrFail($id);

        $message_to_delete->delete();

        return redirect()->route('admin.messages.index');
    }
}
