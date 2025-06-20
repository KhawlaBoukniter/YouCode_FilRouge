<?php

namespace App\Repositories;

use App\Models\Ticket;

class TicketRepository
{
    public function create(array $data): Ticket
    {
        return Ticket::create($data);
    }

    public function update(Ticket $ticket, array $data): Ticket
    {
        $ticket->update($data);
        return $ticket;
    }

    public function delete(Ticket $ticket): bool
    {
        return $ticket->delete();
    }

    public function getByEventId(int $eventId)
    {
        return Ticket::where('event_id', $eventId)->get();
    }

    public function getByArtistId(int $artistId)
    {
        return Ticket::with('event')->whereHas('event', function ($query) use ($artistId) {
            $query->where('artist_id', $artistId);
        })->with('event')->latest()->get();
    }
}
