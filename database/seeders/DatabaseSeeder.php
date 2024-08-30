<?php

namespace Database\Seeders;

use App\Enums\UserType;
use App\Models\Category;
use App\Models\Company;
use App\Models\Subscriber;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $admin = User::factory()->create([
           "type" => UserType::Admin->value,
           "email" => "admin@admin.com",
           "password" => Hash::make("adminPassword"),
        ]);

        $categories = ["Hospital", "Construction", "Engineering", "Club", "Banking & Finance", "Information & CT"];
        foreach ($categories as $category) {
            Category::factory()->create([
                'name' => $category
            ]);
        }

        // Create Company Accounts
        Company::factory()->for(
            User::factory()->company()->create()
        )
            ->hasAmbassadors(User::factory()->count(rand(20, 40))->create(), [
                "created_at" => now()->year(rand(2000, 2023))->month(rand(1, 12))->day(rand(1, 28))
            ])
            ->count(10)
            ->create();


        //Create Subscribers
        Subscriber::factory()->count(1000)->create();

        echo "Database Seeded Successfully!\n";
    }
}
