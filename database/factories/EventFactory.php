<?php

namespace Database\Factories;

use App\Models\Artist;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $start = Carbon::now()->addDays(rand(5, 30));
        $end = (clone $start)->addDays(rand(1, 5));

        return [
            'artist_id' => Artist::inRandomOrder()->first()?->id ?? Artist::factory(), // relation valide
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph,
            'start_date' => $start,
            'end_date' => $end,
            'location' => $this->faker->city,
            'is_online' => $this->faker->boolean(30),
            'poster' => 'https://via.placeholder.com/400x250?text=' . urlencode($this->faker->words(2, true)),
            'is_approved' => true,
            'is_archived' => false,
        ];
    }
}
