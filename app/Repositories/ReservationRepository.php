<?php

namespace App\Repositories;

use App\Models\Reservation;

class ReservationRepository
{
    public function create(array $data): Reservation
    {
        return Reservation::create($data);
    }

    public function getByUserId(int $userId)
    {
        return Reservation::with('ticket.event')->where('user_id', $userId)->latest()->get();
    }

    public function update(Reservation $reservation, array $data): Reservation
    {
        $reservation->update($data);
        return $reservation;
    }

    public function delete(Reservation $reservation): bool
    {
        return $reservation->delete();
    }
}
