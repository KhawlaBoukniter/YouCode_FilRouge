<?php

namespace App\Services;

use App\Models\ArtistTimeline;
use App\Repositories\ArtistTimelineRepository;

class ArtistTimelineService
{
    protected $repo;

    public function __construct(ArtistTimelineRepository $repo)
    {
        $this->repo = $repo;
    }

    public function getTimelinesForArtist($artistId)
    {
        return $this->repo->getByArtist($artistId);
    }

    public function createTimeline(array $data)
    {
        return $this->repo->create($data);
    }

    public function updateTimeline(ArtistTimeline $timeline, array $data)
    {
        return $this->repo->update($timeline, $data);
    }

    public function deleteTimeline(ArtistTimeline $timeline)
    {
        return $this->repo->delete($timeline);
    }
}
