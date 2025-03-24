<?php

namespace App\Services;

use App\Models\Reservation;
use App\Models\Ticket;
use App\Repositories\ReservationRepository;
use Illuminate\Validation\ValidationException;

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

        $ticket->decrement('quantity', $data['quantity']);

        return $this->reservationRepo->create($data);
    }

    public function getForUser(int $userId)
    {
        return $this->reservationRepo->getByUserId($userId);
    }

    public function updateStatus(Reservation $reservation, string $status): Reservation
    {
        return $this->reservationRepo->update($reservation, ['status' => $status]);
    }
}
