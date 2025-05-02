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
}
