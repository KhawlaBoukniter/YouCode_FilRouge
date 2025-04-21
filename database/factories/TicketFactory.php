<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['standard', 'vip', 'free'];

        return [
            'event_id' => Event::inRandomOrder()->first()?->id ?? Event::factory(),
            'quantity' => $this->faker->numberBetween(20, 100),
            'price' => $this->faker->randomFloat(2, 5, 100),
            'type' => $this->faker->randomElement($types),
            'description' => $this->faker->sentence(10),
            'status' => $this->faker->randomElement(['available', 'sold_out', 'disabled']),
        ];
    }
}
