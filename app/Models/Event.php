<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Ticket;

class Event extends Model
{
    protected $fillable = [
        'artist_id',
        'title',
        'description',
        'start_date',
        'end_date',
        'location',
        'is_online',
        'poster',
        'is_approved',
        'is_archived'
    ];

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
