<?php

namespace App\Services;

use App\Models\Artist;
use App\Models\User;
use App\Repositories\ArtistRepository;
use Illuminate\Support\Facades\Auth;

class ArtistService
{
    protected $artistRepository;

    public function __construct(ArtistRepository $artistRepository)
    {
        $this->artistRepository = $artistRepository;
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
}
