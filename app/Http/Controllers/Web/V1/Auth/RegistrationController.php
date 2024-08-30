<?php

namespace App\Http\Controllers\Web\V1\Auth;

use App\Enums\UserType;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\Auth\CreateCompanyAccountRequest;
use App\Models\Company;
use App\Models\User;
use App\Traits\DataGenerator;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegistrationController extends Controller
{
    use DataGenerator;
    public function page()
    {
        return Inertia::render('Auth/Register/Company');
    }

    public function register(CreateCompanyAccountRequest $request)
    {
        $request->validated();

        //Create Account Owner
        $user = new User();
        $user->first_name = $request->firstName;
        $user->last_name = $request->lastName;
        $user->email = $request->email;
        $user->username = $this->generateReferralCode();
        $user->phone = $request->phoneNumber;
        $user->password = Hash::make($request->password);
        $user->type = UserType::Organization->value;


        // Company Account
        $company = new Company();
        $company->name = $request->companyName;
        $company->email = $request->companyEmail;
        $company->phone = $request->companyPhoneNumber;
        $company->username = $request->companyUsername;

        DB::transaction(function () use ($company, $user) {
            $user->save();

            $company->user_id = $user->id;
            $company->save();

            event(new Registered($user));
        });

        Auth::login($user);

        return redirect(route("dashboard"));
    }
}
