<?php

namespace App\Services;

use App\Models\Reservation;
use App\Repositories\ReservationRepository;

class ReservationService
{
    protected $reservationRepo;

    public function __construct(ReservationRepository $reservationRepo)
    {
        $this->reservationRepo = $reservationRepo;
    }

    public function create(array $data): Reservation
    {
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
