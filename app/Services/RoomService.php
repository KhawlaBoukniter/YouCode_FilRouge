<?php

namespace App\Services;

use App\Repositories\RoomRepository;

class RoomService
{
    protected $roomRepository;

    public function __construct(RoomRepository $roomRepository)
    {
        $this->roomRepository = $roomRepository;
    }

    public function create(array $data)
    {
        return $this->roomRepository->create($data);
    }
}
