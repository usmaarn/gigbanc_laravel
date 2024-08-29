<?php

namespace App\Http\Controllers\V1\Auth;

use App\Enums\UserType;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\Auth\CreateAmbassadorAccountRequest;
use App\Models\Company;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AmbassadorRegistrationController extends Controller
{
    public function page(Company $company)
    {
        return Inertia::render("Auth/Register/Ambassador", [
            "company" => $company,
        ]);
    }

    public function register(CreateAmbassadorAccountRequest $request, Company  $company)
    {
        DB::transaction(function () use ($request, $company) {
            $request->validated();
            $user = $company->ambassadors()->create([
                "first_name" => $request->firstName,
                "last_name" => $request->lastName,
                "email" => $request->email,
                "username" => $request->firstName.$request->lastName.Str::random(5),
                "phone" => $request->phone,
                "referral_code" => "gtc_".$request->lastName . "_" . rand(1000, 100000),
                "password" => Hash::make($request->password),
                "type" => UserType::Ambassador->value,
            ]);
            event(new Registered($user));
            Auth::login($user);
            return redirect(route("dashboard"));
        });
    }
}
