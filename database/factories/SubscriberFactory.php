<?php

namespace Database\Factories;

use App\Enums\SubscriptionStatus;
use App\Models\Category;
use App\Models\Company;
use App\Models\Subscriber;
use App\Models\User;
use App\Traits\DataGenerator;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Subscriber>
 */
class SubscriberFactory extends Factory
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
            "name" => $this->faker->name(),
            "email" => $this->faker->unique()->safeEmail(),
            "phone" => $this->generatePhoneNumber(),
            "type" => "individual",
            "status" => $this->faker->randomElement(SubscriptionStatus::cases()),
            "email_verified_at" => now(),
            "category_id" => Category::all()->random()->id,
            "company_id" => Company::all()->random()->id,
            "user_id" => User::all()->random()->id,
            "phone_verified_at" => now(),
            "created_at" => $this->faker->dateTime(),
        ];
    }

    public function organization(): static
    {
        return $this->state(fn (array $attributes) => [
           "type" => "organization",
        ]);
    }

    public function unVerified(): static
    {
        return $this->state(fn (array $attributes) => [
            "email_verified_at" => null,
            "phone_verified_at" => null,
        ]);
    }
}
