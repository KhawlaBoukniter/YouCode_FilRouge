<?php

namespace App\Policies;

use App\Models\Artist;
use App\Models\User;

class ArtistPolicy
{
    public function viewPending(User $user)
    {
        return $user->role === 'admin';
    }

    public function validate(User $user, Artist $artist)
    {
        return $user->role === 'admin';
    }
}
