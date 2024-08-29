<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait DataGenerator
{
    public function generatePhoneNumber(): string
    {
        $suffix1 = [7, 8, 9];
        $suffix2 = [0, 1];
        $number = rand(10000000, 99999999);
        return "0" . $suffix1[array_rand($suffix1, 1)] . $suffix2[array_rand($suffix2, 1)] . $number;
    }

    public function generateReferralCode(): string
    {
        return "gtc_". Str::random(8) . "_" . rand(10, 99999);
    }
}
