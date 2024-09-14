<?php

namespace App\Http\Controllers\Web\V1;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Services\V1\AmbassadorService;
use App\Services\V1\CompanyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AmbassadorController extends Controller
{
    private AmbassadorService $ambassadorService;
    private CompanyService $companyService;
    public function __construct()
    {
        $this->ambassadorService = new AmbassadorService();
        $this->companyService = new CompanyService();
    }

    public function companies(Request $request)
    {
        return Inertia::render("Ambassador/Companies/Page", [
            "myCompanies" => $this->ambassadorService->getCompanies($request->user()),
        ]);
    }

    public function exploreCompanies(Request $request)
    {
        return Inertia::render("Ambassador/Companies/Explore/Page", [
           "companies" => $this->companyService->findAllNotJoinedByAmbassador($request->user()),
        ]);
    }

    public function joinCompany(Request $request, Company $company): void
    {
        sleep(5);
        $this->ambassadorService->joinCompany($request->user(), $company);
    }

    public function leaveCompany(Request $request, Company $company)
    {
        sleep(5);
        $this->ambassadorService->leaveCompany($request->user(), $company);
    }
}
