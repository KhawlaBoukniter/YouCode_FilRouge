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

    public function update(User $user, Artwork $artwork)
    {
        return $user->id === $artwork->artist->user_id;
    }

    public function delete(User $user, Artwork $artwork)
    {
        return $user->id === $artwork->artist->user_id;
    }
}
