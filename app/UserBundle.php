<?php

namespace App;

use Illuminate\Database\Eloquent\Pivot;

class UserBundle extends Pivot
{
    public function expired_date_bundle() {
        return $this->belongsTo('App\Bundle');
    }

    public function expired_date_user() {
        return $this->belongsTo('App\User');
    }
}
