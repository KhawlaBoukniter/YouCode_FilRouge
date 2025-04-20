<?php

namespace Database\Seeders;

use App\Models\Artwork;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SavedArtworksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::where('role_id', 3)->get();
        $artworks = Artwork::all();

        foreach ($users as $user) {
            $favorites = $artworks->random(rand(2, 3))->pluck('id');
            $user->savedArtworks()->syncWithoutDetaching($favorites);
        }
    }
}
