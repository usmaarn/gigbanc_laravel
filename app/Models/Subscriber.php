<?php

namespace App\Models;

use App\Observers\V1\SubscriptionObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[ObservedBy([SubscriptionObserver::class])]
class Subscriber extends Model
{
    use HasFactory;

    protected $fillable = [
      "name", "email", "phone", "type", "category_id", "company_id",
      "user_id", "status", "email_verified_at", "phone_verified_at"
    ];

    public function ambassador(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
