<?php

namespace App\Services;

use App\Models\Event;
use App\Repositories\EventRepository;

class EventService
{
    protected $eventRepo;

    public function __construct(EventRepository $eventRepo)
    {
        $this->eventRepo = $eventRepo;
    }

    public function list()
    {
        return $this->eventRepo->getAll();
    }

    public function show($id)
    {
        return $this->eventRepo->findById($id);
    }

    public function create(array $data)
    {
        return $this->eventRepo->create($data);
    }

    public function update(Event $event, array $data)
    {
        return $this->eventRepo->update($event, $data);
    }

    public function delete(Event $event)
    {
        return $this->eventRepo->delete($event);
    }
}
