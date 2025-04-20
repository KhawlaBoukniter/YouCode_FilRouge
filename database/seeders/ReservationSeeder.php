<?php

namespace Database\Seeders;

use App\Models\Artist;
use App\Models\Artwork;
use App\Models\Event;
use App\Models\Reservation;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $visitor = User::where('role_id', 3)->first();
        if (! $visitor) {
            $this->command->warn("Aucun utilisateur avec role_id=3 (visiteur) trouvé.");
            return;
        }

        $artistUser = User::where('role_id', 2)->firstOrCreate([
            'email' => 'artist@example.com',
        ], [
            'name' => 'John Doe',
            'password' => bcrypt('password'),
        ]);

        $artist = Artist::firstOrCreate(['user_id' => $artistUser->id]);

        $artwork = Artwork::factory()->create([
            'artist_id' => $artist->id,
            'title' => 'Digital Mirage',
        ]);

        $event = Event::factory()->create([
            'artist_id' => $artist->id,
            'title' => 'Art Expo 2025',
        ]);

        $ticket = Ticket::factory()->create([
            'event_id' => $event->id,
            'artwork_id' => $artwork->id,
            'price' => 250,
            'type' => 'Standard',
        ]);

        Reservation::factory()->create([
            'user_id' => $visitor->id,
            'ticket_id' => $ticket->id,
            'status' => 'paid',
        ]);
    }
}
