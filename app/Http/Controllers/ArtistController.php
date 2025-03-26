<?php

namespace App\Http\Controllers;

use App\Http\Requests\Artist\UpdateArtistProfileRequest;
use App\Models\Artist;
use App\Services\ArtistService;
use Illuminate\Support\Facades\Auth;

class ArtistController extends Controller
{
    protected $artistService;

    public function __construct(ArtistService $artistService)
    {
        $this->artistService = $artistService;
    }

    public function updateProfile(UpdateArtistProfileRequest $request)
    {
        try {
            $data = $this->artistService->updateProfile(
                $request->only(['name', 'email']),
                $request->only(['bio', 'website', 'instagram', 'twitter']),
                $request->file('avatar')
            );

            return response()->json([
                'message' => 'Profil mis à jour avec succès.',
                'user' => $data['user'],
                'artist' => $data['artist']
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 404);
        }
    }

    public function getPendingArtists()
    {
        return response()->json($this->artistService->getPendingArtists());
    }

    public function validateArtist($id)
    {
        $artist = Artist::findOrFail($id);
        $this->artistService->validateArtist($id);

        return response()->json(['message' => 'Artist validated successfully']);
    }
}
