<?php

namespace App\Services;

use App\Repositories\ArtworkRepository;
use Illuminate\Support\Facades\Auth;
use App\Models\Artist;

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

        $data['artist_id'] = $artist->id;
        return $this->artworkRepo->create($data);
    }
}
