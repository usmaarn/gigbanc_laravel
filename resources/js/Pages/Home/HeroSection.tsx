import {config} from "@/lib/config";
import {Link} from "@inertiajs/react";


export default function HeroSection(){
    return(
        <section className="hero-section py-20 bg-primary min-h-[70vh]">
            <div className="container grid grid-cols-2 gap-5">
                <div className="text-white space-y-5">
                    <h6 className="uppercase text-sm tracking-widest">{config.appName} Advocacy Platform</h6>
                    <h4 className="text-5xl font-light">
                        Stay ahead of changing market dynamics
                    </h4>
                    <p className="text-xl font-light">
                        Harness richer insights at scale so you can take action with confidence
                    </p>
                    <Link href={route("register")} className="px-10 py-4 inline-block bg-white text-primary font-semibold">
                        Get Started
                    </Link>
                </div>
                <div className="">

                </div>
            </div>
        </section>
    )
}
