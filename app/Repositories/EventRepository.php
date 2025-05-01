<?php

namespace App\Repositories;

use App\Models\Event;

class EventRepository
{
    public function getAll(array $filters = [])
    {
        $query = Event::withCount('reservations')->latest();

        if (!empty($filters['search'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('title', 'ILIKE', '%' . $filters['search'] . '%')
                    ->orWhere('description', 'ILIKE', '%' . $filters['search'] . '%');
            });
        }

        if (isset($filters['is_online'])) {
            $query->where('is_online', $filters['is_online']);
        }

        return $query->paginate(6);
    }

    public function findById($id)
    {
        return Event::findOrFail($id);
    }

    public function create(array $data)
    {
        return Event::create($data);
    }

    public function update(Event $event, array $data)
    {
        $event->update($data);
        return $event;
    }

    public function delete(Event $event)
    {
        return $event->delete();
    }

    public function getByArtistId($userId)
    {
        return Event::withCount('reservations')
            ->whereHas('artist', function ($query) use ($userId) {
                $query->where('user_id', $userId);
            })
            ->latest()
            ->get();
    }
}
