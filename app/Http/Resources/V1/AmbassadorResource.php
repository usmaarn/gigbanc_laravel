<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AmbassadorResource extends JsonResource
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
            "joinDate" => $this->organizations->count(),
            "subscribers" => [
                "total" => $this->subscribers->count(),
                "verified" => "",
                "unverified" => "",
            ]
        ];
    }
}
