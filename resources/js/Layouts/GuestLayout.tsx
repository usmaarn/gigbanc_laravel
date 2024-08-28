import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children, name }: PropsWithChildren & {name?: string}) {
    return (
        <section className="max-w-screen min-h-screen py-10 md:py-20 px-3 flex flex-col items-center justify-center gap-5">
            <ApplicationLogo name={name}/>
            {children}
        </section>
    );
}
