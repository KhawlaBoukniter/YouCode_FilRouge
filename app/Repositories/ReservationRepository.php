<?php

namespace App\Repositories;

use App\Models\Reservation;

class ReservationRepository
{

    public function filterForUser(array $filters)
    {
        return Reservation::with('ticket.event')->where('user_id', $filters['user_id'])
            ->when(isset($filters['status']), function ($query) use ($filters) {
                $query->where('status', $filters['status']);
            })
            ->when(isset($filters['date_min']), function ($query) use ($filters) {
                $query->whereDate('created_at', '>=', $filters['date_min']);
            })
            ->when(isset($filters['date_max']), function ($query) use ($filters) {
                $query->whereDate('created_at', '<=', $filters['date_max']);
            })
            ->when(isset($filters['event_title']), function ($query) use ($filters) {
                $query->whereHas('ticket.event', function ($q) use ($filters) {
                    $q->where('title', 'ILIKE', '%' . $filters['event_title'] . '%');
                });
            })->latest()->paginate(6);
    }
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
