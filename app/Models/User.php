<?php

namespace App\Models;

use App\Enums\UserType;
use App\Observers\V1\UserObserver;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;


#[ObservedBy(UserObserver::class)]
class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

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
}
