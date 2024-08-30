<?php

namespace App\Http\Controllers\Web\V1;

use App\Enums\SubscriptionStatus;
use App\Events\V1\Subscribed;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\Ambassador\SubscriberRequest;
use App\Models\Category;
use App\Models\Company;
use App\Models\Subscriber;
use App\Models\User;
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
           $subscription = Subscriber::create([
               "name" => $request->name,
               "email" => $request->email,
               "phone" => $request->phone,
               "type" => $request->type,
               "status" => SubscriptionStatus::PROCESSING->value,
               "company_id" => $request->company_id,
               "category_id" => $request->category_id,
               "user_id" => $request->user_id,
           ]);

           Subscribed::dispatch($subscription);
        });

       if ($request->user()){
           return redirect()->route("dashboard");
       }else{
           return redirect()->route("company.onboard-success", Company::find($request->company_id)->username);
       }
    }

    public function destroy(Subscriber $subscriber)
    {
        $subscriber->delete();
        return redirect()->route("dashboard.subscribers");
    }

    public function onboardSubscriber(Request $request, Company $company, $user)
    {
        $user = User::where("referral_code", $user)->firstOrFail();
        return Inertia::render("Company/OnboardSubscriber", [
            "categories" => Category::all(),
            "company" => $company,
            "ambassador" => $user,
        ]);
    }

    public function onboardingSuccess(Request $request, Company $company)
    {
        return Inertia::render("Company/OnboardingSuccess", [
            "categories" => Category::all(),
            "company" => $company,
        ]);
    }
}
