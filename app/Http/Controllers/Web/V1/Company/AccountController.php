<?php

namespace App\Http\Controllers\Web\V1\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\Auth\CreateCompanyAccountRequest;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function create(CreateCompanyAccountRequest $request)
    {
        $validated = $request->validated();
    }
}
