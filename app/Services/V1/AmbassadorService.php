<?php

namespace App\Services\V1;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class AmbassadorService
{
    public function getCompanies(User $ambassador): ?Collection
    {
        return $ambassador->organizations()->get();
    }

    public function joinCompany(User $ambassador, Company $company): void
    {
        $ambassador->organizations()->attach($company);
    }

    public function leaveCompany(User $ambassador, Company $company): void
    {
        $ambassador->organizations()->detach($company);
    }
}
