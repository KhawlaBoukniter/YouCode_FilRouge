<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ValidationHelper
{
    public static function ensureUserIsOwner(int $ownerId, string $resourceName = 'ressource'): void
    {
        if ($ownerId !== Auth::id()) {
            throw new HttpException(403, "Action non autorisée sur cette $resourceName.");
        }
    }
}
