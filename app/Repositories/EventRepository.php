<?php

namespace App\Repositories;

use App\Models\Event;

class EventRepository
{
    public function getAll()
    {
        return Event::latest()->paginate(6);
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
}
