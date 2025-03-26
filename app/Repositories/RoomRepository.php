<?php

namespace App\Repositories;

use App\Models\Room;

class RoomRepository
{
    public function create($data): Room
    {
        return Room::create($data);
    }

    public function getPublicRooms()
    {
        return Room::where('is_public', true)->with(['style', 'artist.user'])->get();
    }
}
