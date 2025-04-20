<?php

namespace Database\Seeders;

use App\Models\Artist;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArtistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::where('role_id', 2)->get();

        if ($users->isEmpty()) {
            echo "Aucun utilisateur avec role_id=2 trouvé.\n";
            return;
        }

        foreach ($users as $user) {
            Artist::create([
                'user_id' => $user->id,
                'bio' => 'Biographie de ' . $user->name,
                'website' => 'https://example.com/' . $user->id,
                'instagram' => 'https://instagram.com/user' . $user->id,
                'twitter' => 'https://twitter.com/user' . $user->id,
                'is_validated' => true,
            ]);
        }
    }
}
