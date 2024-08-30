<?php

use App\Http\Controllers\Api\V1\SubscriberController;
use Illuminate\Support\Facades\Route;

Route::middleware("auth")->name("api.")->group(function () {
   Route::apiResource("/subscribers", SubscriberController::class); 
});