<?php

namespace App\Http\Controllers;

use App\Models\ArtistTimeline;
use App\Services\ArtistTimelineService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArtistTimelineController extends Controller
{
    protected $service;

    public function __construct(ArtistTimelineService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        $artistId = Auth::user()->artist->id;
        return response()->json($this->service->getTimelinesForArtist($artistId));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'year' => 'required|string',
            'title' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
        ]);

        $validated['artist_id'] = Auth::user()->artist->id;

        return response()->json($this->service->createTimeline($validated), 201);
    }

    public function update(Request $request, ArtistTimeline $timeline)
    {
        $validated = $request->validate([
            'year' => 'required|string',
            'title' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
        ]);

        return response()->json($this->service->updateTimeline($timeline, $validated));
    }

    public function destroy(ArtistTimeline $timeline)
    {
        $this->service->deleteTimeline($timeline);
        return response()->json(['message' => 'Supprimé avec succès.']);
    }
}
