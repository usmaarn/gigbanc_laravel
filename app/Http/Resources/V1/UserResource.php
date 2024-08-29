<?php

namespace App\Http\Resources\V1;

use App\Enums\SubscriptionStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "firstName" => $this->first_name,
            "lastName" => $this->last_name,
            "username" => $this->username,
            "referralCode" => $this->referral_code,
            "phoneNumber" => $this->phone,
            "emailAddress" => $this->email,
            "emailVerifiedAt" => $this->email_verified_at,
            "subscribers" => [
                "total" => $this->subscribers->count(),
                "verified" => $this->subscribers()->where("status", SubscriptionStatus::VERIFIED->value)->count(),
                "processing" => $this->subscribers()->where("status", SubscriptionStatus::PROCESSING->value)->count(),
            ],
            "createdAt" => $this->created_at
        ];
    }
}
