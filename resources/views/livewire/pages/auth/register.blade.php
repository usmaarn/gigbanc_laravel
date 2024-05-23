<?php

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Livewire\Attributes\Layout;
use Livewire\Volt\Component;
use Illuminate\Support\Str;

new #[Layout('layouts.guest')] class extends Component
{
    public string $name = '';
    public string $email = '';
    public string $phone_number = '';
    public string $profession = '';
    public string $referrer_id;


    public function mount(?string $referrer = null):void
    {
        $user = User::where('referral_code', $referrer)->firstorFail();
        $this->referrer_id = $user->id;
    }

    /**
     * Handle an incoming registration request.
     */
    public function register(): void
    {
        $validated = $this->validate([
            'name' => ['required', 'string', 'regex:/^[a-z]{3,}\s[a-z]{3,}$/i'],
            'phone_number' => ["required", "regex:/^0[789][01][0-9]{8}$/", "unique:".User::class],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            "profession" => ["required", "string"],
        ]);

        $validated['password'] = Hash::make($validated['password']);
        $validated['referral_code'] = 'lar-'. Str::random(4) . '-' . Str::random(5);
        event(new Registered($user = User::create($validated)));
    }
}; ?>

<div>
    <form wire:submit="register">
        <!-- Name -->
        <div>
            <x-input-label for="name" :value="__('Name')" />
            <x-text-input wire:model="name" id="name" class="block mt-1 w-full" type="text" name="name" required autofocus autocomplete="name" />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

        <!-- Email Address -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Email Address')" />
            <x-text-input wire:model="email" id="email" class="block mt-1 w-full" type="email" name="email" required autocomplete="email" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Phone Number -->
        <div class="mt-4">
            <x-input-label for="phone_number" :value="__('Phone Number')" />
            <x-text-input wire:model="phone_number" id="phone_number"
                          class="block mt-1 w-full" type="tel" name="phone_number"
                          required autocomplete="tel" />
            <x-input-error :messages="$errors->get('phone_number')" class="mt-2" />
        </div>

        <!-- Profession -->
        <div class="mt-4">
            <x-input-label for="profession" :value="__('Profession')" />
            <x-text-input wire:model="profession" id="profession" class="block mt-1 w-full"
                          type="text" name="profession" required autocomplete="profession" />
            <x-input-error :messages="$errors->get('profession')" class="mt-2" />
        </div>


        <div class="flex items-center justify-end mt-4">
            <x-primary-button class="ms-4">
                {{ __('Register') }}
            </x-primary-button>
        </div>
    </form>
</div>
