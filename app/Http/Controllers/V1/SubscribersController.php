<?php

namespace App\Http\Controllers\V1;

use App\Enums\SubscriptionStatus;
use App\Events\V1\Subscribed;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\Ambassador\SubscriberRequest;
use App\Models\Category;
use App\Traits\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SubscribersController extends Controller
{

    use Subscription;

    public function index(Request $request)
    {
        return Inertia::render("Dashboard/Subscribers", [
            "organizations" => $request->user()->organizations,
            "categories" => Category::all(),
            "subscribers" => $this->getSubscribers(),
        ]);
    }

    public function store(SubscriberRequest $request)
    {
        $request->validated();

        DB::transaction(function () use ($request) {
           $subscription = $request->user()->subscribers()->create([
             "name" => $request->name,
             "email" => $request->email,
             "phone" => $request->phone,
             "type" => $request->type,
             "status" => SubscriptionStatus::NOT_ONBOARDED->value,
             "company_id" => $request->company_id,
             "category_id" => $request->category_id,
           ]);

           Subscribed::dispatch($subscription);

           return redirect()->route("dashboard.subscribers");
        });
    }
}
