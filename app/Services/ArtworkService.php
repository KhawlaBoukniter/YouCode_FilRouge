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

    public function list()
    {
        return $this->artworkRepo->getAll();
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
}
