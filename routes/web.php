<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\V1\DashboardController;
use App\Http\Controllers\V1\CompanyController;
use App\Http\Controllers\V1\SubscribersController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get("/dashboard", [DashboardController::class, "index"])->name("dashboard");

    Route::prefix("/dashboard")->name("dashboard.")->group(function () {
        Route::get("/subscribers", [SubscribersController::class, 'index'])->name("subscribers");
        Route::delete("/subscribers", [SubscribersController::class, 'destroy'])->name("subscribers");
        Route::post("/subscribers", [SubscribersController::class, 'store'])->name("subscribers")
        ->middleware("agent");

        Route::get("/settings", [DashboardController::class, "settings"])->name("settings");
        Route::get("/leaderboard", [DashboardController::class, "leaderboard"])->name("leaderboard");
    });
});

Route::middleware("company")->group(function () {
    //Company
    Route::get("/dashboard/complains", [DashboardController::class, "complains"])->name("dashboard.complains");
    Route::get("/dashboard/ambassadors", [CompanyController::class, "ambassadors"])->name("company.ambassadors");
    Route::post("/dashboard/ambassadors", [CompanyController::class, "addAmbassador"])->name("company.ambassadors");
});

require __DIR__.'/auth.php';


Route::get("/{company:username}", [CompanyController::class, "landing"])->name("company.landing");
Route::get("/{company:username}/onboard/success", [SubscribersController::class, "onboardingSuccess"])
    ->name("company.onboard-success");
