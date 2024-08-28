<?php

namespace App\Http\Controllers\V1;

use App\Enums\UserType;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterAmbassadorRequest;
use App\Http\Requests\V1\Company\NewAmbassadorRequest;
use App\Models\Company;
use App\Traits\Ambassadors;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CompanyController extends Controller
{
    use Ambassadors;
    public function ambassadors(Request $request)
    {
        return Inertia::render('Dashboard/Ambassadors', [
            "ambassadors" => $this->getAmbassadors(),
        ]);
    }

    public function addAmbassador(NewAmbassadorRequest $request)
    {
        DB::transaction(function () use ($request) {
            $request->validated();
            $company = $request->user()->company;

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
            return redirect(route("dashboard"));
        });
    }

    public function register(Request $request, Company $company)
    {
        return Inertia::render('Company/RegisterAmbassador', [
           "company" => $company,
        ]);
    }

    public function storeAmbassador(RegisterAmbassadorRequest $request, Company $company)
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

    public function landing(Request $request, Company $company)
    {
        return Inertia::render('Welcome', [
           "company" => $company,
        ]);
    }

}
