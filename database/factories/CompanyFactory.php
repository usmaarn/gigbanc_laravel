<?php

namespace Database\Factories;

use App\Enums\UserType;
use App\Models\User;
use App\Traits\DataGenerator;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    use DataGenerator;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->company(),
            "email" => $this->faker->unique()->companyEmail(),
            "phone" => $this->generatePhoneNumber(),
            "address" => $this->faker->address(),
            "user_id" => User::where("type", UserType::Organization->value)->inRandomOrder()->first()->id,
            "website" => $this->faker->url(),
            "username" => $this->faker->unique()->username(),
            "description" => $this->faker->sentence(),
            "created_at" => $this->faker->dateTime(),
        ];
    }
}
