<?php

use App\Http\Controllers\Web\V1\Company\CompanyAmbassadorController;
use App\Http\Controllers\Web\V1\Company\CompanyController;
use App\Http\Controllers\Web\V1\Company\CompanySettingsController;
use Illuminate\Support\Facades\Route;


Route::middleware(["auth", "verified", "company"])->group(function () {

    Route::prefix("/dashboard")->group(function (){
        Route::get("/ambassadors", [CompanyAmbassadorController::class, "index"])
            ->name("company.ambassadors");

        Route::get("/dashboard/settings/company", [CompanySettingsController::class, "page"])
            ->name("dashboard.settings.company");
    });

});

Route::middleware("guest")->group(function () {
    Route::get("/{company:username}", [CompanyController::class, "landing"])->name("company.landing");
});
