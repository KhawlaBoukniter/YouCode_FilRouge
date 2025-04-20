<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PurchaseController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return response()->json([
            'purchases' => $user->purchasedArtworks()->with('artist.user')->get()
        ]);
    }
}
