<?php

namespace App\Http\Controllers;

use App\Models\Artwork;
use App\Models\ArtworkRoom;
use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RoomArtworkController extends Controller
{
    public function assignArtwork(Request $request, Room $room)
    {
        $request->validate([
            'artwork_id' => 'required|exists:artworks,id',
            'position_key' => 'required|string'
        ]);

        DB::table('artwork_rooms')->updateOrInsert(
            [
                'room_id' => $room->id,
                'position_key' => $request->position_key
            ],
            [
                'artwork_id' => $request->artwork_id,
                'created_at' => now()
            ]
        );

        return response()->json(['message' => 'Artwork assigned successfully.']);
    }

    public function getAssignedArtworks(Room $room)
    {
        $assigned = ArtworkRoom::with('artwork')
            ->where('room_id', $room->id)
            ->get()
            ->map(function ($entry) {
                return [
                    'position_key' => $entry->position_key,
                    'artwork' => $entry->artwork,
                ];
            });

        return response()->json($assigned);
    }
}
