<x-layouts.mail>
    <h2>Dear {{$subscriber->organization->name}},</h2>

    <p>
        A new Subscription has just been received from your account at {{config('app.name')}} Platform
        by {{$subscriber->ambassador->first_name}} {{$subscriber->ambassador->last_name}},
        We will notify you if the subscriber has been fully onboarded.
    </p>

    <p>Thank you.</p>

    <p>Management.</p>
    <p>{{config("app.name")}}</p>
</x-layouts.mail>
