<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Requests\Artwork\ArtworkRequest;
use App\Http\Requests\Artwork\ArtworkUpdateRequest;
use App\Models\Artwork;
use App\Services\ArtworkService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ArtworkController extends Controller
{
    use AuthorizesRequests;

    protected $artworkService;

    public function __construct(ArtworkService $artworkService)
    {
        $this->artworkService = $artworkService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = [
            'artist_id' => $request->query('artist_id'),
            'keyword' => $request->query('keyword'),
        ];

        return response()->json([
            'artworks' => $this->artworkService->list($filters)
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
        if (! Gate::allows('create', Artwork::class)) {
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
    public function show(Artwork $artwork)
    {
        $result = $this->artworkService->findWithComments($artwork);

        return response()->json($result);
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
    public function update(ArtworkUpdateRequest $request, Artwork $artwork)
    {
        $this->authorize('update', $artwork);

        $updated = $this->artworkService->update($artwork, $request->validated());

        return response()->json([
            'message' => 'Œuvre mise à jour avec succès',
            'artwork' => $updated
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artwork $artwork)
    {
        $this->authorize('delete', $artwork);

        $this->artworkService->delete($artwork);

        return response()->json([
            'message' => 'Œuvre supprimée avec succès'
        ]);
    }

    public function myArtworks()
    {
        $artworks = $this->artworkService->getByArtist();
        return response()->json(['artworks' => $artworks]);
    }

    public function myStats()
    {
        $stats = $this->artworkService->getStatsForArtist();
        return response()->json(['stats' => $stats]);
    }

    public function toggleSave(Artwork $artwork)
    {
        $this->artworkService->toggleSave($artwork);

        return response()->json([
            'message' => 'État de sauvegarde mis à jour avec succès.'
        ]);
    }

    public function getSavedArtworks()
    {
        $artworks = $this->artworkService->getSavedArtworks();

        return response()->json([
            'saved_artworks' => $artworks
        ]);
    }

    public function toggleLike(Artwork $artwork)
    {
        $this->artworkService->toggleLike($artwork);

        return response()->json([
            'message' => 'État du like mis à jour avec succès.'
        ]);
    }
}
