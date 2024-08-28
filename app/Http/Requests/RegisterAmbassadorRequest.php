<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class RegisterAmbassadorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "firstName" => ["required", "alpha", "min:3", "max:50"],
            "lastName" => ["required", "alpha", "min:3", "max:50"],
            "email" => ["required", "email", "max:50", "unique:users,email"],
            "password" => ["required", "min:8", "max:50", "confirmed"],
            "phone" => ["required", "regex:/^0[789][01][0-9]{8}$/", "unique:users,phone"],
        ];
    }
}
