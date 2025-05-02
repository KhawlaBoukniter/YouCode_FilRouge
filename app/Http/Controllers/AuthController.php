<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\UpdateAvatarRequest;
use App\Models\Artist;
use App\Services\AuthService;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function register(RegisterRequest $request)
    {
        $data = $this->authService->register($request->validated());

        return response()->json([
            'message' => 'Inscription réussie',
            'user' => $data['user'],
            'token' => $data['token']
        ], 201);
    }

    public function login(LoginRequest $request)
    {
        $data = $this->authService->login($request->validated());

        if ($data === 'Non validé') {
            return response()->json([
                'message' => "Votre compte artiste n'est pas encore validé par l'administration"
            ], 403);
        }

        if (!$data) {
            return response()->json([
                'message' => 'Identifiants invalides'
            ], 401);
        }

        return response()->json([
            'message' => 'Connexion réussie',
            'user' => $data['user'],
            'token' => $data['token']
        ]);
    }

    public function me()
    {
        $user = Auth::user();

        $artist = $user->role_id === 2
            ? Artist::where('user_id', $user->id)->first()
            : null;

        if ($artist) {
            $user->avatar = $artist->avatar;
            $user->bio = $artist->bio;
        }

        return response()->json([
            'user' => $user,
            'artist' => $artist,
        ]);
    }

    public function logout()
    {
        $this->authService->logout();

        return response()->json([
            'message' => 'Déconnexion réussie'
        ]);
    }

    public function uploadAvatar(UpdateAvatarRequest $request)
    {
        $user = Auth::user();
        $avatarPath = $this->authService->uploadAvatar($user, $request->file('avatar'));

        return response()->json([
            'message' => 'Avatar mis à jour avec succès.',
            'avatar_url' => $avatarPath
        ]);
    }
}
