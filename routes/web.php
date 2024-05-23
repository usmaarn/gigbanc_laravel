<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\EnsureUserIsAgent;

Route::view('/', 'welcome');

Route::view('/success', 'success');

Route::view('dashboard', 'dashboard')
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::view('profile', 'profile')
    ->middleware(['auth'])
    ->name('profile');

Route::view('leadership', 'leadership', [
    'agents' => \App\Models\User::where('type', \App\Enums\UserType::Agent)
        ->withCount(['referrals' => function (\Illuminate\Database\Eloquent\Builder $query) {
            $query->whereNot('email_verified_at', null);
        }])->orderBy('referrals_count', 'desc')->get(),
    ])
    ->middleware(['auth', EnsureUserIsAgent::class])
    ->name('leadership');

require __DIR__.'/auth.php';
