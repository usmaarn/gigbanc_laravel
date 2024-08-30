<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\SubscriberController;

Route::middleware("auth", "verified")->name("frontend.")->group(function (){
    Route::apiResource("frontend/subscribers", SubscriberController::class);
});
