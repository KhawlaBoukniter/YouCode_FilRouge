<?php

namespace App\Http\Controllers;

use App\Http\Requests\Artist\UpdateArtistProfileRequest;
use App\Models\Artist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArtistController extends Controller
{
    public function updateProfile(UpdateArtistProfileRequest $request)
    {
        $user = Auth::user();
        $artist = Artist::where('user_id', $user->id)->first();

        if (! $artist) {
            return response()->json(['message' => 'Profil artiste introuvable.'], 404);
        }

        $user->update($request->only(['name', 'email']));

        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $artist->avatar = $path;
        }

        $artist->update($request->only([
            'bio',
            'website',
            'instagram',
            'twitter'
        ]));

        $artist->save();

        return response()->json([
            'message' => 'Profil mis à jour avec succès.',
            'user' => $user,
            'artist' => $artist
        ]);
    }
}
