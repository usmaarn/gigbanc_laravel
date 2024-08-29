<?php

namespace App\Http\Controllers\V1\Web\Dashboard;

use App\Enums\UserType;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AmbassadorCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LeaderboardController extends Controller
{
    public function all(Request $request)
    {
        $ambassadors = User::withCount("subscribers")
            ->where('type', UserType::Ambassador->value)
            ->orderBy('subscribers_count', 'desc')
            ->get();
        return Inertia::render("Dashboard/Leaderboard/Page", [
            "ambassadors" => new AmbassadorCollection($ambassadors),
        ]);
    }

    public function company()
    {

    }
}
