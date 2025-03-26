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
        'style_id',
        'is_public'
    ];

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function style()
    {
        return $this->belongsTo(Style::class);
    }
}
