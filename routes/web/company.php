<?php

use Illuminate\Support\Facades\Route;

Route::middleware(["auth", "verified", "company"])->group(function () {

    Route::prefix("/dashboard")->group(function (){
        Route::get("/ambassadors", [])->name("dashboard.ambassadors");
    });

});
