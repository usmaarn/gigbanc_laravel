import {Link, usePage} from "@inertiajs/react";
import {Company} from "@/types/data";
import {PageProps} from "@/types";

export default function ApplicationLogo({name, className}: {name?: string, className?: string}) {
    const {company}: PageProps<{company: Company}> = usePage().props;
  return (
    <Link href={company ? route("company.landing", company.username) : "/"}
          className={"flex items-center gap-2 text-2xl "+className}>
       <span className="font-semibold capitalize">{name ?? "Growthacy"}</span>
    </Link>
  );
}
