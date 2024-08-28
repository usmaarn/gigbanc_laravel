<?php

namespace App\Models;

use App\Observers\V1\CompanyObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;


#[ObservedBy(CompanyObserver::class)]
class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        "name", "email", "phone", "address", "username", "description", "user_id",
        "logo", "website"
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function ambassadors():BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public function subscribers():HasMany
    {
        return $this->hasMany(Subscriber::class);
    }
}
