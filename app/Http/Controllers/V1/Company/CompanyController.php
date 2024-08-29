<?php

namespace App\Http\Controllers\V1\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyController extends Controller
{


    public function landing(Request $request, Company $company)
    {
        return Inertia::render('Welcome', [
           "company" => $company,
        ]);
    }

}
