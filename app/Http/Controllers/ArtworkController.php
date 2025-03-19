<?php

namespace App\Http\Controllers;

use App\Http\Requests\Artwork\ArtworkRequest;
use App\Services\ArtworkService;
use Illuminate\Support\Facades\Gate;

class ArtworkController extends Controller
{
    protected $artworkService;

    public function __construct(ArtworkService $artworkService)
    {
        $this->artworkService = $artworkService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'artworks' => $this->artworkService->list()
        ]);
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
    public function store(ArtworkRequest $request)
    {
        if (! Gate::allows('create', \App\Models\Artwork::class)) {
            return response()->json(['message' => 'Action non autorisée'], 403);
        }

        $artwork = $this->artworkService->create($request->validated());

        if (! $artwork) {
            return response()->json(['message' => 'Aucun artiste lié à cet utilisateur.'], 403);
        }

        return response()->json([
            'message' => 'Œuvre créée avec succès',
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
    public function update(ArtworkRequest $request, string $id)
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
