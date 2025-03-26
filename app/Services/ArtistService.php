<?php

namespace App\Services;

use App\Models\Artist;
use App\Models\User;
use App\Repositories\ArtistRepository;
use App\Repositories\RoomRepository;
use Illuminate\Support\Facades\Auth;

class ArtistService
{
    protected $artistRepository;
    protected $roomRepository;

    public function __construct(ArtistRepository $artistRepository, RoomRepository $roomRepository)
    {
        $this->artistRepository = $artistRepository;
        $this->roomRepository = $roomRepository;
    }

    public function updateProfile(array $userData, array $artistData, $avatar = null): array
    {
        $user = Auth::user();
        $user->update($userData);

        $artist = $this->artistRepository->findByUserId($user->id);

        if (! $artist) {
            throw new \Exception('Profil artiste introuvable.');
        }

        if ($avatar) {
            $path = $avatar->store('avatars', 'public');
            $artistData['avatar'] = $path;
        }

        $artist = $this->artistRepository->update($artist, $artistData);

        return [
            'user' => $user,
            'artist' => $artist,
        ];
    }

    public function getPendingArtists()
    {
        return $this->artistRepository->getPending();
    }

    public function validateArtist(int $id)
    {
        $this->artistRepository->validate($id);

        $artist = $this->artistRepository->getById($id);
        $this->roomRepository->createForArtist($artist);
    }
}
