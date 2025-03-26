<?php

namespace App\Repositories;

use App\Models\Artist;
use Illuminate\Support\Facades\Auth;

class ArtistRepository
{
    public function findByUserId(int $userId): ?Artist
    {
        return Artist::where('user_id', $userId)->first();
    }

    public function update(Artist $artist, array $data): Artist
    {
        $artist->update($data);
        return $artist;
    }
}
