<?php

namespace App\Services;

use App\Models\Reservation;
use App\Models\Ticket;
use App\Repositories\ReservationRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class ReservationService
{
    protected $reservationRepo;

    public function __construct(ReservationRepository $reservationRepo)
    {
        $this->reservationRepo = $reservationRepo;
    }

    public function create(array $data)
    {
        $ticket = Ticket::findOrFail($data['ticket_id']);

        if ($ticket->quantity < $data['quantity']) {
            throw ValidationException::withMessages([
                'quantity' => 'La quantité demandée dépasse le stock disponible.'
            ]);
        }

        if ($ticket->status !== 'available') {
            throw ValidationException::withMessages([
                'ticket_id' => 'Ce ticket n’est pas disponible à la réservation.'
            ]);
        }

        $ticket->decrement('quantity', $data['quantity']);

        return $this->reservationRepo->create($data);
    }

    public function getForUser(int $userId)
    {
        return $this->reservationRepo->getByUserId($userId);
    }

    public function updateStatus(Reservation $reservation, string $status): Reservation
    {
        $this->authorizeUser($reservation);

        return $this->reservationRepo->update($reservation, ['status' => $status]);
    }

    public function delete(Reservation $reservation): bool
    {
        $this->authorizeUser($reservation);

        return $this->reservationRepo->delete($reservation);
    }

    private function authorizeUser(Reservation $reservation): void
    {
        if ($reservation->user_id !== Auth::id()) {
            abort(403, 'Action non autorisée.');
        }
    }

    protected function canReserve(Ticket $ticket, int $quantity): bool
    {
        return $ticket->status === 'available' && $ticket->quantity >= $quantity;
    }
}
