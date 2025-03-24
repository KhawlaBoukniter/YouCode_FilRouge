<?php

namespace App\Http\Controllers;

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
}
