<?php

namespace App\Policies;

use App\Models\Artwork;
use App\Models\User;

class ArtworkPolicy
{
    public function create(User $user)
    {
        return $user->role_id === 2; // 2 = artiste
    }
}
