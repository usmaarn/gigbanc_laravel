<?php

namespace App\Http\Controllers\Web\V1\Dashboard;

use App\Http\Controllers\Controller;
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
