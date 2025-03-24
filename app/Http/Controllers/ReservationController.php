<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Http\Requests\ReservationRequest;
use App\Models\Ticket;
use App\Services\ReservationService;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    protected $reservationService;

    public function __construct(ReservationService $reservationService)
    {
        $this->reservationService = $reservationService;
    }

    public function index()
    {
        $reservations = $this->reservationService->getForUser(Auth::id());

        return response()->json([
            'reservations' => $reservations
        ]);
    }

    public function store(ReservationRequest $request)
    {
        $user = Auth::user();

        $ticket = Ticket::findOrFail($request->ticket_id);

        if ($ticket->quantity < $request->quantity) {
            return response()->json([
                'message' => 'La quantité demandée dépasse la quantité disponible.'
            ], 422);
        }

        $reservation = $this->reservationService->create([
            'user_id' => $user->id,
            'ticket_id' => $request->ticket_id,
            'quantity' => $request->quantity,
            'status' => 'reserved',
        ]);

        $ticket->quantity -= $request->quantity;
        $ticket->save();

        return response()->json([
            'message' => 'Réservation enregistrée avec succès.',
            'reservation' => $reservation
        ], 201);
    }

    public function cancel(Reservation $reservation)
    {
        $updated = $this->reservationService->updateStatus($reservation, 'cancelled');

        if ($reservation->user_id !== Auth::id()) {
            return response()->json(['message' => 'Action non autorisée.'], 403);
        } else {
            return response()->json([
                'message' => 'Réservation annulée avec succès.',
                'reservation' => $updated
            ]);
        }
    }


    public function pay(Reservation $reservation)
    {
        $updated = $this->reservationService->updateStatus($reservation, 'paid');

        if ($reservation->user_id !== Auth::id()) {
            return response()->json(['message' => 'Action non autorisée.'], 403);
        } else {
            return response()->json([
                'message' => 'Réservation payée avec succès.',
                'reservation' => $updated
            ]);
        }
    }
}
