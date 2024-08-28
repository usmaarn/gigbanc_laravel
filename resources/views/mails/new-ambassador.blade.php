<x-layouts.mail>
    <h2>Dear {{$organization->name}},</h2>

    <p>
        A new Ambassador has just registered to your organization on {{config('app.name')}} Platform.
    </p>

    <p>Thank you.</p>

    <p>Management.</p>
    <p>{{config("app.name")}}</p>
</x-layouts.mail>
