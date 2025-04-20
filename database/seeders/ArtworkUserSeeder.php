<?php

namespace Database\Seeders;

use App\Models\Artwork;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class ArtworkUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $artworks = Artwork::all();

        foreach ($users as $user) {
            $purchasedArtworks = $artworks->random(2);

            foreach ($purchasedArtworks as $artwork) {
                DB::table('artwork_user')->insert([
                    'user_id' => $user->id,
                    'artwork_id' => $artwork->id,
                    'price' => $artwork->price ?? rand(1000, 5000),
                    'purchased_at' => Carbon::now()->subDays(rand(1, 90)),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
