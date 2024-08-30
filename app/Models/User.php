<?php

namespace App\Models;

use App\Enums\UserType;
use App\Observers\V1\UserObserver;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


#[ObservedBy(UserObserver::class)]
class User extends Authenticatable implements MustVerifyEmail, FilamentUser
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        "username",
        'phone',
        "profession",
        "referral_code",
        'password',
        'type',
        'email_verified_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function referrals(): HasMany
    {
        return $this->hasMany(User::class, 'referrer_id');
    }

    public function referrer(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function isAmbassador()
    {
        return $this->type == UserType::Ambassador->value;
    }

    public function isCompany()
    {
        return $this->type == UserType::Organization->value;
    }

    public function company(): HasOne
    {
        return $this->hasOne(Company::class);
    }

    public function organizations(): BelongsToMany
    {
        return $this->belongsToMany(Company::class);
    }

    public function subscribers():HasMany
    {
        return $this->hasMany(Subscriber::class);
    }

    public function canAccessPanel(Panel $panel): bool
    {
        if (app()->environment('production')) {
            return str_ends_with($this->email, "@luminousdigitalgency.com")
                &&  $this->hasVerifiedEmail();
        }
        return true;
    }

    public function getNameAttribute(): string
    {
        return $this->first_name . " " .$this->last_name;
    }
}