<?php

namespace Database\Factories;

use App\Enums\UserType;
use App\Models\User;
use App\Traits\DataGenerator;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
    use DataGenerator;
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            "username" => fake()->username(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => $this->generatePhoneNumber(),
            "referral_code" => $this->generateReferralCode(),
            "profession" => $this->faker->jobTitle(),
            'email_verified_at' => now(),
            "type" => UserType::Ambassador->value,
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            "created_at" => $this->faker->dateTime(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    public function company(): static
    {
        return $this->state(fn (array $attributes) => [
           "type" => UserType::Organization->value
        ]);
    }

    public function admin(): static
    {
        return $this->state(fn (array $attributes) => [
            "type" => UserType::Admin->value
        ]);
    }
}
