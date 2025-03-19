<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Models\Artwork;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArtworkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'required|url',
        ]);

        $artist = Artist::where('user_id', Auth::id())->first();

        if (! $artist) {
            return response()->json([
                'message' => 'Cet utilisateur n\'est pas un artiste.'
            ], 403);
        }

        $artwork = Artwork::create([
            'title'       => $request->title,
            'description' => $request->description,
            'image'   => $request->image,
            'artist_id'   => $artist->id
        ]);

        return response()->json([
            'message' => 'Artwork crée avec succès.',
            'artwork' => $artwork
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
