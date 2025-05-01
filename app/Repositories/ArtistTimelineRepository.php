<?php

namespace App\Repositories;

use App\Models\ArtistTimeline;

class ArtistTimelineRepository
{
    public function getByArtist($artistId)
    {
        return ArtistTimeline::where('artist_id', $artistId)->orderBy('year', 'desc')->get();
    }

    public function create(array $data)
    {
        return ArtistTimeline::create($data);
    }

    public function update(ArtistTimeline $timeline, array $data)
    {
        $timeline->update($data);
        return $timeline;
    }

    public function delete(ArtistTimeline $timeline)
    {
        return $timeline->delete();
    }
}
