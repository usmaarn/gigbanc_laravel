<?php

namespace App\Traits;

use App\Models\Subscriber;
use Illuminate\Database\Eloquent\Collection;

trait Ambassadors {
    public function getAmbassadors(): Collection|array
    {
        $ambassadors = [];

        if (auth()->user()->isCompany()){
            $ambassadors = auth()->user()->company->ambassadors()->limit(5)->get();
        }

        return $ambassadors;
    }
}
