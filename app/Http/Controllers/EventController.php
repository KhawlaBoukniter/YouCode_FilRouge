<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Models\Event;
use App\Services\EventService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $event->load('tickets');
        $tickets = $event->tickets->load('event');

        return response()->json([
            'event' => $event,
            'tickets' => $tickets,
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
        $event = $this->eventService->approve($event);

        return response()->json([
            'message' => 'Evenement validé avec succès.',
            'event' => $event
        ]);
    }

    public function reject(Event $event)
    {
        $event = $this->eventService->reject($event);

        return response()->json([
            'message' => 'Evenement rejeté avec succès.',
            'event' => $event
        ]);
    }

    public function archive(Event $event)
    {
        $event = $this->eventService->archive($event);

        return response()->json([
            'message' => 'Evenement archivé avec succès.',
            'event' => $event
        ]);
    }

    public function restore(Event $event)
    {
        $event = $this->eventService->restore($event);

        return response()->json([
            'message' => 'Evenement restoré avec succès.',
            'event' => $event
        ]);
    }

    public function artistEvents(Request $request)
    {
        $userId = Auth::id();

        return response()->json([
            'events' => $this->eventService->getByArtist($userId),
        ]);
    }
}
