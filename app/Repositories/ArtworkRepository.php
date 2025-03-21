<?php

namespace App\Repositories;

use App\Models\Artwork;

class ArtworkRepository
{
    public function getAll(array $filters = [])
    {
        $query = Artwork::with('artist.user')->latest();

        if (!empty($filters['artist_id'])) {
            $query->where('artist_id', $filters['artist_id']);
        }

        if (!empty($filters['keyword'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('title', 'ILIKE', '%' . $filters['keyword'] . '%')
                    ->orWhere('description', 'ILIKE', '%' . $filters['keyword'] . '%');
            });
        }

        return $query->paginate(6);
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

    public function findWithComments($artwork)
    {
        return [
            'artwork' => $artwork->load('artist.user'),
            'comments' => $artwork->comments()->latest()->paginate(5)
        ];
    }

    public function getByArtistId($userId)
    {
        return Artwork::whereHas('artist', function ($q) use ($userId) {
            $q->where('user_id', $userId);
        })->with('artist.user')->latest()->paginate(6);
    }
}
