<?php

namespace App\Services;

use App\Repositories\ArtworkRepository;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Models\Artist;
use App\Models\Artwork;

class ArtworkService
{
    protected $artworkRepo;

    public function __construct(ArtworkRepository $artworkRepo)
    {
        $this->artworkRepo = $artworkRepo;
    }

    public function list(array $filters = [])
    {
        $user = Auth::user();
        $artworks = $this->artworkRepo->getAll($filters);

        $artworks->getCollection()->transform(function ($artwork) use ($user) {
            $artwork->is_purchased = $user ? $artwork->buyers->contains($user->id) : false;
            return $artwork;
        });

        return $artworks;
    }

    public function create(array $data)
    {
        $artist = Artist::where('user_id', Auth::id())->first();

        if (! $artist) {
            return null;
        }

        if (isset($data['image'])) {
            $path = $data['image']->store('artworks', 'public');
            $data['image'] = Storage::url($path);
        }

        $data['artist_id'] = $artist->id;
        return $this->artworkRepo->create($data);
    }

    public function update($artwork, array $data)
    {
        return $this->artworkRepo->update($artwork, $data);
    }

    public function delete(Artwork $artwork)
    {
        return $this->artworkRepo->delete($artwork);
    }

    public function findWithComments($artwork)
    {
        return $this->artworkRepo->findWithComments($artwork);
    }

    public function getByArtist()
    {
        return $this->artworkRepo->getByArtistId(Auth::id());
    }

    public function getStatsForArtist()
    {
        return $this->artworkRepo->getStatsByArtistId(Auth::id());
    }

    public function toggleSave(Artwork $artwork)
    {
        $user = Auth::user();
        return $this->artworkRepo->toggleSave($user, $artwork);
    }

    public function getSavedArtworks()
    {
        return $this->artworkRepo->getSavedArtworks(Auth::user());
    }

    public function toggleLike(Artwork $artwork)
    {
        $user = Auth::user();
        return $this->artworkRepo->toggleLike($user, $artwork);
    }
}
