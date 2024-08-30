import {Head, Link, usePage} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Button} from "@/Components/ui/button";
import UserDropdown from "@/Components/UserDropdown";
import {PageProps} from "@/types";


export default function Navbar({name, loginUrl, registerUrl}: {
    name?: string
    loginUrl: string,
    registerUrl: string,
}) {
    const {auth}: PageProps = usePage().props;

  return (
    <header className="h-[80px] bg-white">
        <Head title="Home" />
      <nav className="container px-3 h-full flex items-center justify-between">
        <ApplicationLogo name={name} />

        {!auth?.user ? (
          <div className="flex items-center gap-4">
            <Link href={loginUrl}>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary">Login</Button>
            </Link>
            <Link href={registerUrl} className="hidden sm:inline">
              <Button size="lg">Register</Button>
            </Link>
          </div>
        ) : (
          <UserDropdown />
        )}
      </nav>
    </header>
  );
}
