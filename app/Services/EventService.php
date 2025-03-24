<?php

namespace App\Services;

use App\Models\Event;
use App\Repositories\EventRepository;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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
        Log::info('create() EventService appelé');
        Log::info('Données avant traitement poster : ', $data);

        if (request()->hasFile('poster')) {
            $file = request()->file('poster');
            Log::info('Poster reçu', ['nom' => $file->getClientOriginalName()]);

            $path = $file->store('posters', 'public');
            $data['poster'] = Storage::url($path);

            Log::info('Fichier stocké à : ' . $data['poster']);
        } else {
            Log::warning('Aucun fichier "poster" détecté dans la requête.');
        }

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
