<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArtworkUser extends Model
{
    protected $table = 'artwork_user';

    protected $fillable = [
        'user_id',
        'artwork_id',
        'price',
        'purchased_at',
    ];

    public $timestamps = true;
}
