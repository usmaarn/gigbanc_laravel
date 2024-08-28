<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Subscriber;
use App\Traits\Ambassadors;
use App\Traits\Subscription;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    use Subscription, Ambassadors;
    public function index(Request $request)
    {
        return Inertia::render('Dashboard/Index', [
            "subscribers" => $this->getSubscribers(),
            "ambassadors" => $this->getAmbassadors(),
            "companies" => Company::all(),
            "subscribers_count" => count($this->getSubscribers()),
            "ambassadors_count" => auth()->user()->isCompany() ? auth()->user()->company->subscribers()->count() : 0,
        ]);
    }

    public function complains()
    {
        return Inertia::render('Dashboard/Complains', [

        ]);
    }

    public function settings()
    {
       return Inertia::render('Dashboard/Settings/Account', [

       ]);
    }

    public function leaderboard()
    {
        return Inertia::render('Dashboard/Leaderboard', [

        ]);
    }
}
