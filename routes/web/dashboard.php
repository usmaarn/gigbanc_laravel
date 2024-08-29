<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\V1\Dashboard\DashboardController;


Route::middleware(["auth", "verified"])->group(function () {

   Route::get("/dashboard", [DashboardController::class, "index"])->name("dashboard");

   Route::group(['namespace' => 'Dashboard', 'prefix' => 'dashboard', 'as' => 'dashboard.'], function () {
   });
});
