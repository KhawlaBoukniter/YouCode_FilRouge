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

    public function index(Request $request)
    {
        $reservations = $this->reservationService->getForUser($request->only(['status', 'date_min', 'date_max', 'event_title']));

        return response()->json([
            'reservations' => $reservations
        ]);
    }

    public function store(ReservationRequest $request)
    {
        $user = Auth::user();

        $reservation = $this->reservationService->create([
            'user_id' => $user->id,
            'ticket_id' => $request->ticket_id,
            'quantity' => $request->quantity,
            'status' => 'reserved',
        ]);

        return response()->json([
            'message' => 'Réservation enregistrée avec succès.',
            'reservation' => $reservation
        ], 201);
    }

    public function cancel(Reservation $reservation)
    {
        $updated = $this->reservationService->updateStatus($reservation, 'cancelled');

        return response()->json([
            'message' => 'Réservation annulée avec succès.',
            'reservation' => $updated
        ]);
    }

    public function pay(Reservation $reservation)
    {
        $updated = $this->reservationService->updateStatus($reservation, 'paid');

        return response()->json([
            'message' => 'Réservation payée avec succès.',
            'reservation' => $updated
        ]);
    }

    public function destroy(Reservation $reservation)
    {
        $this->reservationService->delete($reservation);

        return response()->json([
            'message' => 'Réservation supprimée avec succès.'
        ]);
    }

    public function getAvailableActions(Reservation $reservation)
    {
        $actions = $this->reservationService->getAvailableActions($reservation);

        return response()->json([
            'actions' => $actions
        ]);
    }

    public function getTotal(Reservation $reservation)
    {
        $total = $this->reservationService->getTotal($reservation);

        return response()->json([
            'total_price' => $total,
        ]);
    }

    public function forArtist()
    {
        $reservations = $this->reservationService->getForArtist();

        return response()->json(['reservations' => $reservations]);
    }
}
