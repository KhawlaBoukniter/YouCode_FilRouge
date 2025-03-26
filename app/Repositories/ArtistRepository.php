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

    public function getPending()
    {
        return Artist::where('is_validated', false)->with('user')->get();
    }

    public function validate(int $id)
    {
        return Artist::where('id', $id)->update(['is_validated' => true]);
    }
}
