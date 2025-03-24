<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    public function store(TicketRequest $request)
    {
        $ticket = Ticket::create([
            'user_id' => Auth::id(),
            'event_id' => $request->input('event_id'),
            'quantity' => $request->input('quantity'),
            'status' => 'reserved'
        ]);

        return response()->json([
            'message' => 'Ticket réservé avec succès.',
            'ticket' => $ticket
        ], 201);
    }
}
