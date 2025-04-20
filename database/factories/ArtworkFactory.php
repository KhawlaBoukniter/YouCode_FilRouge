<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Artwork>
 */
class ArtworkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'image' => 'https://i.pinimg.com/736x/8d/ae/07/8dae070a397a8e31456c03b51762fc62.jpg',
            'price' => $this->faker->randomFloat(2, 100, 10000),
        ];
    }
}
