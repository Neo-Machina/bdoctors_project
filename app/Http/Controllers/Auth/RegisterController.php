<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {

        $new_user = new User();

        return User::create([
            'name' => $data['name'],
            'address' => $data['address'],
            'email' => $data['email'],
            'slug' => $this->getFreeSlug($new_user->name),
            'password' => Hash::make($data['password']),
        ]);
    }

    public function getFreeSlug($name) {
        // assegno lo slug
        $slug_to_save = Str::slug($name, '-');

        //salvo lo slug base senza $counter
        $slug_base = $slug_to_save;

        //verifico se lo slug_to_save è già esistente nel db
        $existing_slug = User::where('slug', '=', $slug_to_save)->first();

        //appendo un numero allo slug_base finché non ne trovo uno libero
        $counter = 1;
        while($existing_slug) {
            //proviamo a creare un nuovo slug con -$counter
            $slug_to_save = $slug_base . '-' . $counter;

            //verifico nuovamente se lo slug è già esistente nel db
            $existing_slug = User::where('slug', '=', $slug_to_save)->first();

            $counter++;
        }

        return $slug_to_save;
    }
}
