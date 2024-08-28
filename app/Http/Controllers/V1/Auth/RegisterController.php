<?php

namespace App\Http\Controllers\V1\Auth;

use App\Enums\UserType;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\Auth\CreateCompanyAccountRequest;
use App\Models\Company;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Register/Index');
    }

    public function store(CreateCompanyAccountRequest $request)
    {
        $validated = $request->validated();
        return DB::transaction(function () use ($request) {
            $user = User::create([
               "first_name" => $request->firstName,
               "last_name" => $request->lastName,
               "email" => $request->email,
               "username" => $request->firstName.$request->lastName.Str::random(5),
               "phone" => $request->phone,
               "password" => Hash::make($request->password),
                "type" => UserType::Organization->value,
            ]);

            $company = Company::create([
                "name" => $request->companyName,
                "email" => $request->companyEmail,
                "phone" => $request->companyPhone,
                "address" => $request->companyAddress,
                "username" => $request->companyUsername,
                "description" => $request->companyDescription,
                "user_id" => $user->id,
            ]);

            event(new Registered($user));

            Auth::login($user);

            return redirect(route("dashboard"));
        });
    }
}
