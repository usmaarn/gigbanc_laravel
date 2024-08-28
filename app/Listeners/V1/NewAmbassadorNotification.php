<?php

namespace App\Listeners\V1;

use App\Events\V1\AmbassadorRegistered;
use App\Mail\V1\NewAmbassador;
use Illuminate\Support\Facades\Mail;

class NewAmbassadorNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(AmbassadorRegistered $event): void
    {
        Mail::to($event->organization->email)
            ->send(new NewAmbassador($event->ambassador, $event->organization));
    }
}
