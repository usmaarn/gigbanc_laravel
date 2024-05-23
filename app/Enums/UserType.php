<?php

namespace App\Enums;

enum UserType: int
{
    case Admin = 1;
    case Agent = 2;
    case Regular = 3;
}
