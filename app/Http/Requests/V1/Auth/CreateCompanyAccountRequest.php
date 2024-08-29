<?php

namespace App\Http\Requests\V1\Auth;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateCompanyAccountRequest extends FormRequest
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
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "firstName" => ["required", "alpha", "min:3", "max:50"],
            "lastName" => ["required", "alpha", "min:3", "max:50"],
            "email" => ["required", "email", "max:50", "unique:users,email"],
            "password" => ["required", "min:8", "max:50", "confirmed"],
            "phoneNumber" => ["required", "regex:/^0[789][01][0-9]{8}$/", "unique:users,phone"],
            "companyName" => ["required", "min:3", "max:50", "unique:companies,name"],
            "companyEmail" => ["required", "email", "max:50", "unique:companies,email"],
            "companyPhoneNumber" => ["required", "regex:/^0[789][01][0-9]{8}$/", "unique:companies,phone"],
            "companyUsername" => ["required", "min:5", "max:50", "alpha_dash", "unique:companies,username"],
        ];
    }
}
