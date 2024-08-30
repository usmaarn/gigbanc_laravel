<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\SubscriberController;

Route::middleware(["auth", "verified"])->name("frontend.")->prefix("frontend")->group(function (){
    Route::apiResource("/subscribers", SubscriberController::class);
    Route::get("/subscribers/chart", [SubscriberController::class, "chart"])->name("subscribers.chart");
});
