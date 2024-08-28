<?php

namespace App\Listeners\V1;

use App\Events\V1\Subscribed;
use Illuminate\Support\Facades\Mail;

class SendSubscriptionNotification
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
    public function handle(Subscribed $event): void
    {
        Mail::to($event->subscriber->email)
            ->send(new \App\Mail\V1\Subscribed($event->subscriber));

        Mail::to($event->subscriber->organization->email)
            ->send(new \App\Mail\V1\NewSubscription($event->subscriber));
    }
}
