<?php

namespace App\Repositories;

use App\Models\Artist;
use App\Models\Artwork;
use App\Models\User;

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

    public function getStatsByArtistId($userId)
    {
        $artist = Artist::where('user_id', $userId)->first();

        if (! $artist) {
            return [
                'artworks_count' => 0,
                'comments_count' => 0,
                'latest_artwork' => null,
            ];
        }

        $artworks = Artwork::withCount('comments')
            ->where('artist_id', $artist->id)
            ->orderByDesc('created_at')
            ->get();

        return [
            'artworks_count' => $artworks->count(),
            'comments_count' => $artworks->sum('comments_count'),
            'latest_artwork' => $artworks->sortByDesc('created_at')->first(),
        ];
    }

    public function toggleSave(User $user, Artwork $artwork)
    {
        $user->savedArtworks()->toggle($artwork->id);
    }

    public function getSavedArtworks(User $user)
    {
        return $user->savedArtworks()->with('artist.user')->latest()->paginate(6);
    }
}
