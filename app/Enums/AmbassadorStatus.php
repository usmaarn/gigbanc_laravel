<?php

namespace App\Enums;

enum AmbassadorStatus: int
{
    case APPROVED = 10;
    case PENDING = 5;
    case DECLINED = 0;

    case BANNED = -5;
}
