import {Link} from "@inertiajs/react";

export default function ApplicationLogo({name, className}: {name?: string, className?: string}) {

  return (
    <Link href="/" className={"flex items-center gap-2 text-2xl "+className}>
       <span className="font-semibold capitalize">{name ?? "Growthacy"}</span>
    </Link>
  );
}
