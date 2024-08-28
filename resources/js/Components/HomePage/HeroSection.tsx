import {Link, usePage} from "@inertiajs/react";
import {PageProps} from "@/types";
import {Button} from "@/Components/ui/button";

export default function HeroSection({name}: {name?: string}) {
  const {auth}: PageProps = usePage().props;

  return (
    <section
      className="container max-w-screen-md mx-auto flex text-center py-20
            flex-col items-center md:justify-center gap-10 h-[calc(100vh_-_80px)]"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black capitalize text-neutral-600">
        Growthacy <br /> Advocacy System
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {auth?.user ? (
          <Link href={route("dashboard")}>
            <Button size="lg" className="font-bold">
              Access Dashboard
            </Button>
          </Link>
        ) : (
          <>
            <Link href={route("login")}>
              <Button size="lg" variant="outline" className="font-bold">
                Get Started
              </Button>
            </Link>
            <Link href={route("register")}>
              <Button size="lg" className="font-bold">
                Join The Community
              </Button>
            </Link>
          </>
        )}
      </div>

      {/*<SocialLinks />*/}
    </section>
  );
}
