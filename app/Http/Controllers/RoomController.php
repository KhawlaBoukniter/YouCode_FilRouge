<?php

namespace App\Http\Controllers;

use App\Http\Requests\Room\RoomRequest;
use App\Models\Room;
use App\Services\RoomService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoomController extends Controller
{
    protected $roomService;

    public function __construct(RoomService $roomService)
    {
        $this->roomService = $roomService;
    }

    public function store(RoomRequest $request)
    {
        $artist = Auth::user()->artist;

        $data = [
            'artist_id' => $artist->id,
            'name' => $request->input('name'),
            'style_id' => $request->input('style_id'),
            'is_public' => $request->boolean('is_public'),
            'max_artworks' => $request->input('max_artworks', 12),
        ];

        $room = $this->roomService->create($data);

        return response()->json([
            'message' => 'Salle créée avec succès.',
            'room' => $room->load('style'),
        ]);
    }

    public function show($id)
    {
        $room = Room::with('style')->find($id);

        if (!$room) {
            return response()->json(['message' => 'Salle introuvable'], 404);
        }

        return response()->json(['room' => $room]);
    }

    public function getPublicRooms()
    {
        $rooms = $this->roomService->getPublicRooms();

        return response()->json([
            'rooms' => $rooms
        ]);
    }

    public function assignArtwork(Request $request, Room $room)
    {
        $request->validate([
            'artwork_id' => 'required|exists:artworks,id',
            'position_key' => 'required|string'
        ]);

        $room->artworks()->wherePivot('position_key', $request->position_key)->detach();

        $room->artworks()->attach($request->artwork_id, [
            'position_key' => $request->position_key
        ]);

        return response()->json(['message' => 'Artwork assigned successfully']);
    }
}
