<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
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
}
