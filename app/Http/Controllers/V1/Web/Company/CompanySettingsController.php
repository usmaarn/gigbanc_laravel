<?php

namespace App\Http\Controllers\V1\Web\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanySettingsController extends Controller
{
    public function page()
    {
        $company = auth()->user()->company;
        return Inertia::render('Company/Settings/Page', [
            "companyUrl" => route("company.landing", $company->username),

        ]);
    }
}
