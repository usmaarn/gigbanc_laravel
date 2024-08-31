import {config} from "@/lib/config";
import {Link} from "@inertiajs/react";


export default function HeroSection(){
    return(
        <section className="hero-section py-16 md:py-32 bg-white">
            <div className="container grid md:grid-cols-2 gap-5">
                <div className="space-y-5">
                    <h6 className="uppercase text-xs font-bold tracking-wide">{config.appName} Advocacy Platform</h6>
                    <h4 className="text-4xl md:text-5xl leading-[0.9]">
                        Convert more customers with a powerful and intuitive platform
                    </h4>
                    <p className="text-xl font-extralight">
                        Create personalized emails, target precisely with behavior-based
                        automations and segments, and optimize with real-time reporting.
                    </p>
                    <Link href={route("register")} className="btn-primary">
                        Get Started
                    </Link>
                </div>
                <div className="">
                </div>
            </div>
        </section>
    )
}
