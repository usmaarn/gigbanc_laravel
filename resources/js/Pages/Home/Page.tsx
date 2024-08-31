import Navbar from "@/Components/HomePage/Navbar";
import {Company} from "@/types/data";
import HeroSection from "@/Pages/Home/HeroSection";
import {Link} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";

export default function Page({company}: {company: Company}){
    const loginUrl = route("login");
    const registerUrl = company ? route("ambassador.register", company?.username) : route("register");

    return(
        <main className="home-page">
            <Navbar loginUrl={loginUrl} registerUrl={registerUrl} name={company?.name}/>
            <HeroSection/>
            <section className="py-10 bg-primary">
                <div className="container flex flex-col md:flex-row gap-10  md:items-center justify-between">
                    <h4 className="text-2xl text-white font-extralight">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor.
                    </h4>
                    <Link href={route("register")} className="btn px-6 font-semibold whitespace-nowrap">
                        Register Today
                    </Link>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content">
                        <h3>More signals. One customer truth.</h3>
                        <p>
                            Get a rich 360 degree view of customers with social media,
                            transcripts, speech analytics, ticketing systems, and digital
                            behavior which is now mission critical.
                        </p>
                        <Link href="#" className="btn-outline-primary px-6">
                            Learn More
                        </Link>
                    </div>
                    <div className="">
                        <img src="/shopping.avif" alt="shoping girl"/>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content">
                        <h3>More signals. One customer truth.</h3>
                        <p>
                            Get a rich 360 degree view of customers with social media,
                            transcripts, speech analytics, ticketing systems, and digital
                            behavior which is now mission critical.
                        </p>
                        <Link href="#" className="btn-outline-primary px-6">
                            Learn More
                        </Link>
                    </div>
                    <div className="">
                        <img src="/shopping.avif" alt="shoping girl"/>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content">
                        <h3>More signals. One customer truth.</h3>
                        <p>
                            Get a rich 360 degree view of customers with social media,
                            transcripts, speech analytics, ticketing systems, and digital
                            behavior which is now mission critical.
                        </p>
                        <Link href="#" className="btn-outline-primary px-6">
                            Learn More
                        </Link>
                    </div>
                    <div className="">
                        <img src="/shopping.avif" alt="shoping girl"/>
                    </div>
                </div>
            </section>

            <section className="bg-primary py-10 sm:py-20">
                <div className="container grid md:grid-cols-2 gap-10">
                    <div className="">
                        <img src="/media.avif" alt="media"/>
                    </div>
                    <div className="space-y-10">
                        <h3 className="text-4xl md:text-5xl text-white font-extralight">
                            Integrations that tap into the tools your teams use everyday.
                        </h3>
                        <p className="text-lg md:text-2xl text-white font-extralight">
                            Unlock flexibility with out of the box integrations for common systems and powerful,
                            robust APIs and ETLs to harness all your data, work how you want,
                            take action, and transform experiences.
                        </p>
                        <Link href="#" className="btn font-semibold">
                            Start Integrating
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-100">
                <div className="py-3 bg-primary/20"></div>
                <div className="py-5 bg-primary/10"></div>
                <div className="container py-20">
                    <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
                        <ApplicationLogo/>
                        <div className="flex gap-1 mb-5">
                            <Input placeholder="Email Address" className="h-11"/>
                            <Button className="rounded">Subscribe</Button>
                        </div>
                    </div>
                    <div className="flex flex-wrap md:flex-row items-center gap-10 justify-between">
                        <ul className="flex flex-wrap gap-3 font-extralight mt-3">
                            <li><a href="#">Lorem ipsum dolor.</a></li>
                            <li><a href="#">Lorem ipsum</a></li>
                            <li><a href="#">Customer Services</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                        <ul className="flex flex-wrap gap-5 font-extralight mt-3 text-sm">
                            <li>Term of Use</li>
                            <li>Privacy Policy</li>
                            <li>Security</li>
                            <li>Cookie Preferences</li>
                        </ul>
                    </div>
                    <div className="container text-center font-extralight text-sm md:text-base mt-20">
                        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
                    </div>
                </div>
            </footer>
        </main>
    )
}
