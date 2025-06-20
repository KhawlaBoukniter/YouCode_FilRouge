<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(ReservationSeeder::class);
        $this->call(StyleSeeder::class);
        $this->call(ArtworkUserSeeder::class);
        $this->call(SavedArtworksSeeder::class);
        $this->call(CommentSeeder::class);
        $this->call(ArtworkPriceSeeder::class);
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            ArtistSeeder::class,
            EventSeeder::class,
            ArtworkSeeder::class,
            TicketSeeder::class,
        ]);
    }
}
