<?php

namespace App\Http\Requests\V1\Ambassador;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class SubscriberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user() && $this->user()->isAmbassador();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "name" => ["required", "string", "max:255"],
            "email" => ["required", "string", "email", "max:255", "unique:subscribers,email"],
            "phone" => ["required", "regex:/^0[789][01][0-9]{8}$/", "max:255", "unique:subscribers,phone"],
            "type" => ["required", "string", "in:individual,organization"],
            "category_id" => ["required_if:type,organization", "integer", "exists:categories,id"],
            "company_id" => ["required", "numeric", "exists:companies,id"],
        ];
    }
}
