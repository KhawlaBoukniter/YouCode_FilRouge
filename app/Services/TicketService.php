<?php

namespace App\Services;

use App\Models\Ticket;
use App\Repositories\TicketRepository;

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
}
