<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\V1\Auth\AmbassadorRegistrationController;
use App\Http\Controllers\Web\V1\Company\Auth\RegistrationController;
use Illuminate\Support\Facades\Route;


Route::get("/{company:username}/{user}/onboard", [\App\Http\Controllers\V1\SubscribersController::class, "onboardSubscriber"])->name("company.onboard");
Route::post("/{company:username}/onboard", [\App\Http\Controllers\V1\SubscribersController::class, "store"])->name("company.onboard.store");

Route::middleware('guest')->group(function () {

    // Company Organization
    Route::get('register', [RegistrationController::class, 'registrationPage'])->name('register');
    Route::post('register', [RegistrationController::class, 'register'])->name('register');

    //Company Ambassador
    Route::get("/{company:username}/register", [AmbassadorRegistrationController::class, "page"])
        ->name("ambassador.register");
    Route::post("/{company:username}/register", [AmbassadorRegistrationController::class, "register"])
        ->name("ambassador.register");

    //Login
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});
