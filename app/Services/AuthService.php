<?php

namespace App\Services;

use App\Models\Artist;
use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    protected $userRepo;

    public function __construct(UserRepository $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    public function register(array $data)
    {
        $data['password'] = Hash::make($data['password']);
        $user = $this->userRepo->create($data);

        if ($user->role_id == 2) {
            Artist::create([
                'user_id' => $user->id
            ]);
        }

        $token = $user->createToken('auth_token')->accessToken;

        return [
            'user' => $user,
            'token' => $token
        ];
    }

    public function login(array $credentials)
    {
        if (!Auth::attempt($credentials)) {
            return null;
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->accessToken;

        return [
            'user' => $user,
            'token' => $token
        ];
    }

    public function me()
    {
        return Auth::user();
    }

    public function logout()
    {
        $user = Auth::user();
        $user->tokens()->delete();

        return true;
    }

    public function uploadAvatar(User $user, $avatarFile)
    {
        $path = $avatarFile->store('avatars', 'public');
        $user->avatar = $path;
        $user->save();

        return asset('storage/' . $path);
    }
}
