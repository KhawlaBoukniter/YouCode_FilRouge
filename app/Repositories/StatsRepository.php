<?php

namespace App\Repositories;

use App\Models\Event;
use App\Models\Reservation;
use Illuminate\Support\Facades\DB;

class StatsRepository
{
    public function getTotalTicketsSold($artistId)
    {
        return Reservation::whereHas('ticket.event', function ($query) use ($artistId) {
            $query->where('artist_id', $artistId);
        })->sum('quantity');
    }

    public function getTotalRevenue($artistId)
    {
        return Reservation::whereHas('ticket.event', function ($query) use ($artistId) {
            $query->where('artist_id', $artistId);
        })->where('reservations.status', 'paid')->join('tickets', 'reservations.ticket_id', '=', 'tickets.id')
            ->sum(DB::raw('tickets.price * reservations.quantity'));
    }

    public function getTopEvents($artistId)
    {
        return Reservation::select('tickets.event_id', DB::raw('SUM(reservations.quantity) as total_sold'))
            ->join('tickets', 'reservations.ticket_id', '=', 'tickets.id')
            ->whereHas('ticket.event', function ($query) use ($artistId) {
                $query->where('artist_id', $artistId);
            })->groupBy('tickets.event_id')->orderByDesc('total_sold')->take(5)->get();
    }

    public function getTotalCount(): int
    {
        return Reservation::count();
    }

    public function getTotalEvents(): int
    {
        return Event::count();
    }

    public function getGlobalTicketsSold(): int
    {
        return Reservation::where('status', 'paid')->sum('quantity');
    }

    public function getGlobalRevenue(): float
    {
        return Reservation::where('status', 'paid')
            ->join('tickets', 'reservations.ticket_id', '=', 'tickets.id')
            ->sum(DB::raw('tickets.price * reservations.quantity'));
    }
}
