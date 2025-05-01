<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtistTimeline extends Model
{
    use HasFactory;

    protected $fillable = ['artist_id', 'year', 'title', 'location'];

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }
}
