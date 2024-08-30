<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\SubscriberCollection;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    public function index(Request $request){
        $subscribers = $this->query($request);
        if ($subscribers) return new SubscriberCollection($subscribers->all());
        return response()->json([]);
    }

    public function chart(Request $request)
    {
        dd($request->all());
        $subscribers = $this->query($request);
        $subscribers->groupBy("user_id")->all();
        return "hello";
        return response()->json([
            "subscribers" => $subscribers
        ]);
    }

    private function query(Request $request): Collection
    {
        $dateStart = $request->query('date_start');
        $dateEnd = $request->query('date_end');

        $subscribers = null;

        if ($request->user()->isCompany()) $subscribers = $request->user()->company->subscribers;
        else $subscribers = $request->user()->subscribers;

        if ($dateStart) $subscribers = $subscribers->whereDate('created_at', '>=', $dateStart);
        if ($dateEnd) $subscribers = $subscribers->whereDate('created_at', '<=', $dateEnd);
        return $subscribers;
    }

    public function show()
    {

    }
}
