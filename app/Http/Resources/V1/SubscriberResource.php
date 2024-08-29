<?php

namespace App\Http\Resources\V1;

use App\Enums\SubscriptionStatus;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubscriberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "emailAddress" => $this->email,
            "phoneNumber" => $this->phone,
            "category" => $this->category->name,
            "organization" => $this->organization->name,
            "status" => SubscriptionStatus::tryFrom($this->status)->name,
            "createdAt" => $this->created_at
        ];
    }
}
