<?php

namespace App\Http\Controllers;

use App\Http\Requests\Room\RoomRequest;
use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoomController extends Controller
{
    public function store(RoomRequest $request)
    {
        $artist = Auth::user()->artist;
    }
}
