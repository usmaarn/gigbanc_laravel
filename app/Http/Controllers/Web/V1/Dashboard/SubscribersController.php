<?php

namespace App\Http\Controllers\Web\V1\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\SubscriberCollection;
use App\Http\Resources\V1\SubscriberResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscribersController extends Controller
{
    public function index(Request $request)
    {
        if ($request->user()->isCompany()){
            $subscribers = $request->user()->company->subscribers;
            return Inertia::render("Dashboard/Subscribers/Page", [
                "subscribers" => new SubscriberCollection($subscribers),
            ]);
        }

        return Inertia::render("Dashboard/Subscribers/Page", [
            "subscribers" => SubscriberResource::collection($request->user()->subscribers),
        ]);
    }
}
