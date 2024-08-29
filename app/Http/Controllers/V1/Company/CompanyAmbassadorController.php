<?php

namespace App\Http\Controllers\V1\Company;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AmbassadorCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyAmbassadorController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render("Company/Ambassadors/Page", [
            "ambassadors" => new AmbassadorCollection($request->user()->company->ambassadors()->get())
        ]);
    }
}
