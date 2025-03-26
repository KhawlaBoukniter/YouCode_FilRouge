<?php

namespace App\Repositories;

use App\Models\Room;

class RoomRepository
{
    public function create($data): Room
    {
        return Room::create($data);
    }
}
