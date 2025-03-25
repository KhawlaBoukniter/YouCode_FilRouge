<?php

namespace App\Services;

use App\Repositories\StatsRepository;

class StatsService
{
    protected $statsRepo;

    public function __construct(StatsRepository $statsRepo)
    {
        $this->statsRepo = $statsRepo;
    }

    public function getTotalTicketsSold($artistId)
    {
        return $this->statsRepo->getTotalTicketsSold($artistId);
    }

    public function getTotalRevenue(int $artistId): float
    {
        return $this->statsRepo->getTotalRevenue($artistId);
    }

    public function getTopEvents(int $artistId)
    {
        return $this->statsRepo->getTopEvents($artistId);
    }
}
