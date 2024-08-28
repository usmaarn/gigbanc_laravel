<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

}
