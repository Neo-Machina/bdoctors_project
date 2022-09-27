<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Pivot;

class Bundle extends Model
{
    protected $fillable = [
        'name', 
        'duration',
        'price',
        'code'
    ];

    public function users() {
        return $this->belongsToMany('App\User')
        ->using('App\UserBundle')->withPivot(['expired_date']);
    }
}
