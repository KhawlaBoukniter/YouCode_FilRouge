<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtworkRoom extends Model
{
    use HasFactory;

    protected $fillable = ['room_id', 'artwork_id', 'position_key'];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function artwork()
    {
        return $this->belongsTo(Artwork::class);
    }
}
