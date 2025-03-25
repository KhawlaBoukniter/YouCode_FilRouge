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
        return Reservation::where('reservations.status', 'paid')
            ->join('tickets', 'reservations.ticket_id', '=', 'tickets.id')
            ->sum(DB::raw('tickets.price * reservations.quantity'));
    }

    public function getGlobalStatsWithFilters(array $filters): array
    {
        $query = Reservation::query()
            ->join('tickets', 'reservations.ticket_id', '=', 'tickets.id')
            ->join('events', 'tickets.event_id', '=', 'events.id')
            ->where('reservations.status', 'paid');

        if (isset($filters['artist_id'])) {
            $query->where('events.artist_id', $filters['artist_id']);
        }

        if (isset($filters['event_id'])) {
            $query->where('events.id', $filters['event_id']);
        }

        if (isset($filters['date_min'])) {
            $query->whereDate('reservations.created_at', '>=', $filters['date_min']);
        }

        if (isset($filters['date_max'])) {
            $query->whereDate('reservations.created_at', '<=', $filters['date_max']);
        }

        return [
            'total_tickets_sold' => (clone $query)->sum('reservations.quantity'),
            'total_revenue' => (clone $query)->sum(DB::raw('tickets.price * reservations.quantity')),
            'total_reservations' => (clone $query)->count(),
        ];
    }
}
