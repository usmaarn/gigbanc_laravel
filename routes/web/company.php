<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\V1\Company\CompanyAmbassadorController;

Route::middleware(["auth", "verified", "company"])->group(function () {

    Route::prefix("/dashboard")->group(function (){
        Route::get("/ambassadors", [CompanyAmbassadorController::class, "index"])
            ->name("company.ambassadors");
    });

});
