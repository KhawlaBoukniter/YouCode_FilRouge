<?php

namespace App\Services;

use App\Helpers\ValidationHelper;
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

    public function getForUser(array $filters = [])
    {
        $filters['user_id'] = Auth::id();
        return $this->reservationRepo->filterForUser($filters);
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
        ValidationHelper::ensureUserIsOwner($reservation->user_id, 'réservation');
    }

    protected function canReserve(Ticket $ticket, int $quantity): bool
    {
        return $ticket->status === 'available' && $ticket->quantity >= $quantity;
    }

    public function getAvailableActions(Reservation $reservation): array
    {
        $this->authorizeUser($reservation);

        $actions = [];

        if ($reservation->status === 'reserved') {
            $actions[] = 'pay';
            $actions[] = 'cancel';
        }

        if (in_array($reservation->status, ['paid', 'cancelled'])) {
            $actions[] = 'delete';
        }

        return $actions;
    }

    public function getTotal(Reservation $reservation): float|int
    {
        $this->authorizeUser($reservation);

        $ticket = $reservation->ticket;

        if (!$ticket || !$ticket->price) {
            return 0;
        }

        return $ticket->price * $reservation->quantity;
    }
}
