<?php

namespace Database\Seeders;

use App\Models\Artist;
use App\Models\Artwork;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArtworkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $artists = Artist::all();

        if ($artists->isEmpty()) {
            $this->command->warn('Aucun artiste trouvé. Le seeder ArtworkSeeder a été ignoré.');
            return;
        }

        foreach ($artists as $artist) {
            Artwork::factory()->count(3)->create([
                'artist_id' => $artist->id,
            ]);
        }
    }
}
