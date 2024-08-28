import {Link, usePage} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Button} from "@/Components/ui/button";
import UserDropdown from "@/Components/UserDropdown";
import {PageProps} from "@/types";


export default function Navbar({name}: {name?: string}) {
    const {auth}: PageProps = usePage().props;

  return (
    <header className="h-[80px] border-b bg-white">
      <nav className="container px-3 h-full flex items-center justify-between">
        <ApplicationLogo />

        <div className="hidden md:flex items-center gap-8 font-semibold uppercase text-sm tracking-widest">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Blogs</Link>
        </div>

        {!auth?.user ? (
          <div className="flex items-center gap-4">
            <Link href={route("login")}>
              <Button variant="outline">Login</Button>
            </Link>
            <Link href={route("register")} className="hidden sm:inline">
              <Button>Register</Button>
            </Link>
          </div>
        ) : (
          <UserDropdown />
        )}
      </nav>
    </header>
  );
}
