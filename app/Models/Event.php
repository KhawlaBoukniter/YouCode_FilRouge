<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ticket;

class Event extends Model
{
    use HasFactory;

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

    public function reservations()
    {
        return $this->hasManyThrough(Reservation::class, Ticket::class, 'event_id', 'ticket_id', 'id', 'id');
    }
}
