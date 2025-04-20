<?php

namespace Database\Seeders;

use App\Models\Artwork;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArtworkPriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Artwork::all()->each(function ($artwork) {
            if (!$artwork->price) {
                $artwork->price = rand(1000, 5000); // Prix aléatoire en €
                $artwork->save();
            }
        });
    }
}
