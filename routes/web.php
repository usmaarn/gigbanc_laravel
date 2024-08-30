<?php

use App\Http\Controllers\V1\SubscribersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


//Route::middleware('auth')->group(function () {
//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//});

//    Route::prefix("/dashboard")->name("dashboard.")->group(function () {
//        Route::get("/subscribers", [SubscribersController::class, 'index'])->name("subscribers");
//        Route::delete("/subscribers", [SubscribersController::class, 'destroy'])->name("subscribers");
//        Route::post("/subscribers", [SubscribersController::class, 'store'])->name("subscribers")
//        ->middleware("agent");

require __DIR__.'/auth.php';
require __DIR__.'/web/dashboard.php';
require  __DIR__.'/web/company.php';
require  __DIR__.'/web/frontend.php';

Route::get("/{company:username}/onboard/success", [SubscribersController::class, "onboardingSuccess"])
    ->name("company.onboard-success");
