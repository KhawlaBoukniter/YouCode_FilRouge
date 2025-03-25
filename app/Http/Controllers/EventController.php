<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Event;
use App\Services\EventService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EventController extends Controller
{
    protected $eventService;

    public function __construct(EventService $eventService)
    {
        $this->eventService = $eventService;
    }

    public function index(Request $request)
    {
        $filters = [
            'search' => $request->query('search'),
            'is_online' => $request->query('is_online')
        ];

        return response()->json([
            'events' => $this->eventService->list($filters),
        ]);
    }

    public function show(Event $event)
    {
        return response()->json([
            'event' => $event
        ]);
    }

    public function store(EventRequest $request)
    {
        Log::info('EventController@store triggered');
        $data = $request->all();

        Log::info('Données reçues dans la requête : ', $data);
        $event = $this->eventService->create($data);

        Log::info('Événement créé : ', ['event' => $event]);
        return response()->json([
            'message' => 'événement créé avec succès.',
            'event' => $event
        ], 201);
    }

    public function update(EventRequest $request, Event $event)
    {
        $updated = $this->eventService->update($event, $request->all());

        return response()->json([
            'message' => 'événement mis à jour avec succès.',
            'updated' => $updated
        ]);
    }

    public function destroy(Event $event)
    {
        $this->eventService->delete($event);

        return response()->json([
            'message' => 'événement supprimé avec succès.'
        ]);
    }

    public function approve(Event $event)
    {
        $this->eventService->approve($event);

        return response()->json(['message' => 'Evenement validé avec succès.']);
    }

    public function reject(Event $event)
    {
        $this->eventService->reject($event);

        return response()->json(['message' => 'Evenement rejeté avec succès.']);
    }
}
