<?php

use App\Http\Controllers\Web\V1\SubscribersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home/Page', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

require __DIR__.'/auth.php';
require __DIR__.'/web/dashboard.php';
require  __DIR__.'/web/company.php';
require  __DIR__.'/web/frontend.php';

Route::get("/{company:username}/onboard/success", [SubscribersController::class, "onboardingSuccess"])
    ->name("company.onboard-success");
