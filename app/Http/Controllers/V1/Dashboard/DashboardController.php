<?php

namespace App\Http\Controllers\V1\Dashboard;

use App\Enums\SubscriptionStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AmbassadorCollection;
use App\Http\Resources\V1\CompanyCollection;
use App\Http\Resources\V1\SubscriberCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->isCompany()){
            $company = $request->user()->company;
            $topAmbassadors = $request->user()->company->ambassadors()->latest()->limit(5)->get();
            $recentSubscribers = $request->user()->company->subscribers()->latest()->limit(5)->get();
            $chart = $company->subscribers()
                ->groupBy('date')
                ->orderBy('date', 'DESC')
                ->get(array(
                    DB::raw('Date(created_at) as date'),
                    DB::raw('COUNT(*) as "subscribers"')
                ));

            $onboarded = $company->subscribers()
                ->where("status", SubscriptionStatus::VERIFIED->value)
                ->groupBy('date')
                ->orderBy('date', 'DESC')
                ->get(array(
                    DB::raw('Date(created_at) as date'),
                    DB::raw('COUNT(*) as "subscribers"')
                ));

            return Inertia::render("Company/Dashboard/Page", [
                "payouts" => 0,
                "charts" => $chart,
                "onboarded" => $onboarded,
                "subscribersCount" => $request->user()->company->subscribers()->count(),
                "ambassadorsCount" => $request->user()->company->ambassadors()->count(),
                "topAmbassadors" => new AmbassadorCollection($topAmbassadors),
                "recentSubscribers" => new SubscriberCollection($recentSubscribers),
            ]);
        }


        $recentSubscribers = $request->user()->subscribers()->latest()->limit(5)->get();
        $chart = $request->user()->subscribers()
            ->groupBy('date')
            ->orderBy('date', 'DESC')
            ->get(array(
                DB::raw('Date(created_at) as date'),
                DB::raw('COUNT(*) as "subscribers"')
            ));

        $onboarded = $request->user()->subscribers()
            ->where("status", SubscriptionStatus::VERIFIED->value)
            ->groupBy('date')
            ->orderBy('date', 'DESC')
            ->get(array(
                DB::raw('Date(created_at) as date'),
                DB::raw('COUNT(*) as "subscribers"')
            ));

        return Inertia::render("Ambassador/Dashboard/Page", [
            "organizations" => new CompanyCollection($request->user()->organizations),
            "recentSubscribers" => new SubscriberCollection($recentSubscribers),
            "subscribersCount" => $request->user()->subscribers()->count(),
            "earnings" => 0,
            "walletBalance" => 0,
            "charts" => $chart,
            "onboarded" => $onboarded,
        ]);
    }
}
