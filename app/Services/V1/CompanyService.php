<?php

namespace App\Services\V1;

use App\Models\Company;
use App\Models\User;
use App\Repositories\CompanyRepository;
use Illuminate\Database\Eloquent\Collection;

class CompanyService
{
    private CompanyRepository $companyRepository;
    public function __construct(){
        $this->companyRepository = new CompanyRepository();
    }

    public function find(int $id): ?Company
    {
        return $this->companyRepository->findById($id) ?? null;
    }

    public function findAll(): Collection
    {
        return Company::all();
    }

    public function findAllNotJoinedByAmbassador(User $ambassador): Collection
    {
        return Company::whereNotIn("id", $ambassador->organizations()->pluck("id"))->get();
    }
}
