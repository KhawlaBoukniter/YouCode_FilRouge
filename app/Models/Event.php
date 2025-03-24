<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Ticket;

class Event extends Model
{
    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
        'location',
        'is_online',
        'poster',
    ];

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
