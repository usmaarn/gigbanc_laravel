<?php

namespace App\Repositories;

use App\Models\Company;

class CompanyRepository {
    public function findAll()
    {
        return Company::latest()->all();
    }

    public function findById(int $id): ?Company
    {
        return Company::find($id) ?? null;
    }

    public function save(Company $company)
    {
        return $company->save();
    }
}
