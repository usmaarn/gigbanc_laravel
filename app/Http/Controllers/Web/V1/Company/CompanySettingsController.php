<?php

namespace App\Http\Controllers\Web\V1\Company;

use App\Http\Controllers\Controller;
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
