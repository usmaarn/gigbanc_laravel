<?php

namespace App\Http\Controllers\V1\Web\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function page()
    {
        return Inertia::render("Dashboard/Settings/Account");
    }

    public function update()
    {

    }
}
