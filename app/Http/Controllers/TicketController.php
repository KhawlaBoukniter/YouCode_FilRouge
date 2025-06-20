<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Models\Event;
use App\Models\Ticket;
use App\Services\TicketService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    protected $ticketService;

    public function __construct(TicketService $ticketService)
    {
        $this->ticketService = $ticketService;
    }

    public function store(TicketRequest $request)
    {
        $ticket = $this->ticketService->create($request->validated());

        return response()->json([
            'message' => 'Ticket créé avec succès.',
            'ticket' => $ticket
        ], 201);
    }

    public function show(Ticket $ticket)
    {
        $ticket->load('event');
        return response()->json(['ticket' => $ticket]);
    }

    public function update(TicketRequest $request, Ticket $ticket)
    {
        $updated = $this->ticketService->update($ticket, $request->validated());

        return response()->json([
            'message' => 'Ticket mis à jour avec succès.',
            'ticket' => $updated
        ]);
    }

    public function destroy(Ticket $ticket)
    {
        $this->ticketService->delete($ticket);

        return response()->json([
            'message' => 'Ticket supprimé avec succès.'
        ]);
    }

    public function getEventTickets(Event $event)
    {
        $tickets = $this->ticketService->getByEvent($event->id);

        return response()->json([
            'tickets' => $tickets
        ]);
    }

    public function myTickets()
    {
        $tickets = $this->ticketService->getMyTickets();

        return response()->json([
            'tickets' => $tickets
        ]);
    }
}
