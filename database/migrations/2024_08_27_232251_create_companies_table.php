<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->string('address')->nullable();
            $table->foreignId("user_id")->constrained("users")->cascadeOnDelete();
            $table->string('logo')->nullable();
            $table->string('website')->nullable();
            $table->string('username')->unique();
            $table->string('description')->nullable();
            $table->timestamps();
        });

        Schema::create("company_user", function (Blueprint $table) {
            $table->foreignId("company_id")->constrained("companies")->cascadeOnDelete();
            $table->foreignId("user_id")->constrained("users")->cascadeOnDelete();
            $table->primary(["company_id", "user_id"]);
            $table->string("status")->default("approved");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_user');
        Schema::dropIfExists('companies');
    }
};
