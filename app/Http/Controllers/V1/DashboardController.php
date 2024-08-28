<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
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
        ]);
    }
}
