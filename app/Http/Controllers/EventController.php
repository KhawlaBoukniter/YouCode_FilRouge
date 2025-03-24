<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Event;
use App\Services\EventService;
use Illuminate\Http\Request;

class EventController extends Controller
{
    protected $eventService;

    public function __construct(EventService $eventService)
    {
        $this->eventService = $eventService;
    }

    public function index()
    {
        return response()->json([
            'events' => $this->eventService->list(),
        ]);
    }

    public function store(EventRequest $request)
    {
        $event = $this->eventService->create($request->validated());

        return response()->json([
            'message' => 'événement créé avec succès.',
            'event' => $event
        ], 201);
    }

    public function update(EventRequest $request, Event $event)
    {
        $updated = $this->eventService->update($event, $request->validated());

        return response()->json([
            'message' => 'événement mis à jour avec succès.',
            'event' => $event
        ]);
    }

    public function destroy(Event $event)
    {
        $this->eventService->delete($event);

        return response()->json([
            'message' => 'événement supprimé avec succès.'
        ]);
    }
}
