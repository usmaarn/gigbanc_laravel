<x-layouts.mail>
    <h2>Dear {{$subscriber->name}},</h2>

    <p>
        You have been successfully subscribed to {{$subscriber->organization->name}} by
        {{$subscriber->ambassador->first_name}} {{$subscriber->ambassador->last_name}}
        through the {{config('app.name')}} Platform, please finish your onboarding for this subscription to count.
    </p>

    <p>Thank you.</p>

    <p>Management.</p>
    <p>Signed.</p>
</x-layouts.mail>
