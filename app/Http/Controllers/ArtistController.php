<?php

namespace App\Http\Controllers;

use App\Http\Requests\Artist\UpdateArtistProfileRequest;
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
}
