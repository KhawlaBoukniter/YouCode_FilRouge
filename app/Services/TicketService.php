<?php

namespace App\Services;

use App\Models\Artist;
use App\Models\Ticket;
use App\Repositories\TicketRepository;
use Illuminate\Support\Facades\Auth;

class TicketService
{
    protected $ticketRepo;

    public function __construct(TicketRepository $ticketRepo)
    {
        $this->ticketRepo = $ticketRepo;
    }

    public function create(array $data)
    {
        return $this->ticketRepo->create($data);
    }

    public function update(Ticket $ticket, array $data)
    {
        return $this->ticketRepo->update($ticket, $data);
    }

    public function delete(Ticket $ticket)
    {
        return $this->ticketRepo->delete($ticket);
    }

    public function getByEvent(int $eventId)
    {
        return $this->ticketRepo->getByEventId($eventId);
    }

    public function getMyTickets()
    {
        $artist = Artist::where('user_id', Auth::id())->first();

        if (! $artist) {
            return [];
        }

        return $this->ticketRepo->getByArtistId($artist->id);
    }
}
