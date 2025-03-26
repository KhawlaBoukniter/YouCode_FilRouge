<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'artist_id',
        'name',
        'style'
    ];

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }
}
