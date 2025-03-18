<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function artworks()
    {
        return $this->hasMany(Artwork::class);
    }
}
