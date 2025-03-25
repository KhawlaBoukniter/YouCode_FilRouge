<?php

namespace App\Http\Controllers;

use App\Services\StatsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StatsController extends Controller
{
    protected $statsService;
    public function __construct(StatsService $statsService)
    {
        $this->statsService = $statsService;
    }

    public function totalTickets()
    {
        $artistId = Auth::user()->artist->id;
        $total = $this->statsService->getTotalTicketsSold($artistId);

        return response()->json(['total_tickets_sold' => $total]);
    }

    public function totalRevenue()
    {
        $artistId = Auth::user()->artist->id;
        $total = $this->statsService->getTotalRevenue($artistId);

        return response()->json(['tital_revenue' => $total]);
    }

    public function topEvents()
    {
        $artistId = Auth::user()->artist->id;
        $events = $this->statsService->getTopEvents($artistId);

        return response()->json(['top_events' => $events]);
    }

    public function totalReservations()
    {
        $total = $this->statsService->getTotalCount();

        return response()->json([
            'total_reservations' => $total
        ]);
    }
}
