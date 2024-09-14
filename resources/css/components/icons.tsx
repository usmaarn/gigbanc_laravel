


export function MenuIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/>
        </svg>
    )
}


export function CloseIcon(){
    return (
        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
    )
}
