import { Livewire, Alpine } from '../../vendor/livewire/livewire/dist/livewire.esm';
import './bootstrap';

Alpine.directive('clipboard', (el) => {
    let text = el.textContent

    el.addEventListener('click', () => {
        navigator.clipboard.writeText(text)
        el.textContent = 'copied';
        setTimeout(() => el.textContent = text, 2000)
    })
})

Livewire.start()
