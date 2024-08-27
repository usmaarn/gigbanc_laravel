<?php

namespace App\Enums;

enum UserType: int
{
    case Admin = 1;
    case Ambassador = 2;

    case Organization = 4;
}
