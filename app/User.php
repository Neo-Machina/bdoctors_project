<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Pivot;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email', 
        'password',
        'address',
        'slug',
        'phone_number',
        'service',
        'curriculum',
        'photo'
    ];

    public function specializations() {
        return $this->belongsToMany('App\Specialization');
    }

    public function bundles() {
        return $this->belongsToMany('App\Bundle')
        ->using('App\UserBundle')->withPivot(['expired_date']);
    }

    public function messages() {
        return $this->hasMany('App\Message');
    }

    public function reviews() {
        return $this->hasMany('App\Review');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    
}
