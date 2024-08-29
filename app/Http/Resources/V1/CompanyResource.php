<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
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
            "username" => $this->username,
            "emailAddress" => $this->email,
            "subscribers" => $this->subscribers()->count(),
            "ambassadors" => $this->ambassadors()->count(),
            "address" => $this->address,
            "logo" => $this->logo,
            "description" => $this->description,
            "website" => $this->website,
            "createdAt" => $this->created_at,
        ];
    }
}
