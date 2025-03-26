<?php

namespace App\Repositories;

use App\Models\Artist;
use App\Models\Room;

class RoomRepository
{
    public function createForArtist(Artist $artist, string $style = 'room1'): Room
    {
        return Room::create([
            'artist_id' => $artist->id,
            'name' => $artist->user->name,
            'style' => $style,
        ]);
    }
}
