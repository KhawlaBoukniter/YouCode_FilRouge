<?php

namespace Database\Seeders;

use App\Models\Artwork;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $artworks = Artwork::all();

        if ($users->isEmpty() || $artworks->isEmpty()) {
            $this->command->warn('Aucun user ou artwork trouvé. Seeder Comment ignoré.');
            return;
        }

        foreach ($artworks as $artwork) {
            Comment::factory()->count(3)->create([
                'artwork_id' => $artwork->id,
                'user_id' => $users->random()->id,
            ]);
        }
    }
}
