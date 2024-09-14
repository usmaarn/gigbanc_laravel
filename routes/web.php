<?php

use App\Http\Controllers\Web\V1\SubscribersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Web\V1\AmbassadorController;


Route::get('/', function () {
    return Inertia::render('Home/Page');
});

require __DIR__.'/auth.php';
require __DIR__.'/web/dashboard.php';
require  __DIR__.'/web/company.php';
require  __DIR__.'/web/frontend.php';

Route::middleware(['ambassador'])->group(function () {
   Route::get("/dashboard/companies/explore", [AmbassadorController::class, "exploreCompanies"])
    ->name("ambassador.companies.explore");

    Route::post("/dashboard/companies/{company}", [AmbassadorController::class, "joinCompany"])
        ->name("ambassador.companies.join");
    Route::delete("/dashboard/companies/{company}", [AmbassadorController::class, "leaveCompany"])
        ->name("ambassador.companies.leave");
});

Route::get("/{company:username}/onboard/success", [SubscribersController::class, "onboardingSuccess"])
    ->name("company.onboard-success");
