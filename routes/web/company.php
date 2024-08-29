<?php

use Illuminate\Support\Facades\Route;

Route::middleware(["guest"])->group(function () {
    Route::get("/register", [])
});

Route::group(['middleware' => ['auth', 'company']], function () {

});
