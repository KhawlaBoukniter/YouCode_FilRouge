<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StyleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('styles')->insert([
            [
                'name' => 'fluid-elegance',
                'label' => 'Fluid Elegance',
                'description' => 'Moderne et raffiné, parfait pour les œuvres abstraites et poétiques.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'light-galaxy',
                'label' => 'Light Galaxy',
                'description' => 'Ambiance cosmique et lumineuse, idéale pour les œuvres expérimentales.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'golden-modern',
                'label' => 'Golden Modern',
                'description' => 'Salle luxueuse au style épuré, parfaite pour les galeries haut de gamme.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'bold-expression',
                'label' => 'Bold Expression',
                'description' => 'Salle audacieuse et intense, idéale pour les œuvres percutantes et expressives.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
