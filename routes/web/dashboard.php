<?php

use App\Http\Controllers\V1\Dashboard\DashboardController;
use App\Http\Controllers\Web\V1\Dashboard\LeaderboardController;
use App\Http\Controllers\Web\V1\Dashboard\SettingsController;
use App\Http\Controllers\Web\V1\Dashboard\SubscribersController;
use Illuminate\Support\Facades\Route;


Route::middleware(["auth", "verified"])->group(function () {

   Route::get("/dashboard", [DashboardController::class, "index"])->name("dashboard");

   Route::group(['namespace' => 'Dashboard', 'prefix' => 'dashboard', 'as' => 'dashboard.'], function () {

       // Settings
       Route::get("/settings", [SettingsController::class, "page"])->name("settings");
       Route::patch("/settings", [SettingsController::class, "update"])->name("settings");


       //Subscribers
       Route::get("/subscribers", [SubscribersController::class, "index"])->name("subscribers");


       //Leaderboard
       Route::get("/leaderboard", [LeaderboardController::class, "all"])->name("leaderboard");
   });
});
