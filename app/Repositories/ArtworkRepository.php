<?php

namespace App\Repositories;

use App\Models\Artwork;

class ArtworkRepository
{
    public function getAll()
    {
        return Artwork::with('artist.user')->latest()->get();
    }

    public function create(array $data)
    {
        return Artwork::create($data);
    }

    public function update($artwork, array $data)
    {
        $artwork->update($data);
        return $artwork;
    }

    public function delete(Artwork $artwork)
    {
        $artwork->delete();
    }
}
