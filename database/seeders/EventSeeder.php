<?php

namespace Database\Seeders;

use App\Models\Artist;
use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $artists = Artist::all();

        if ($artists->isEmpty()) {
            $this->command->warn('Aucun artiste trouvé. Seeder annulé.');
            return;
        }

        foreach ($artists as $artist) {
            for ($i = 0; $i < 5; $i++) {
                $startDate = Carbon::now()->addDays(rand(1, 60));
                $endDate = (clone $startDate)->addDays(rand(1, 3));

                Event::create([
                    'artist_id' => $artist->id,
                    'title' => 'Événement de ' . $artist->user->name . ' #' . ($i + 1),
                    'description' => fake()->paragraph(2),
                    'start_date' => $startDate,
                    'end_date' => $endDate,
                    'location' => fake()->city(),
                    'is_online' => fake()->boolean(30),
                    'poster' => 'https://via.placeholder.com/400x250?text=Event+' . rand(1, 999),
                    'is_approved' => true,
                    'is_archived' => false,
                ]);
            }
        }
    }
}
