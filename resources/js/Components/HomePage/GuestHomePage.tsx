"use client"

import Navbar from "@/components/homepage/Navbar";
import HeroSection from "@/components/homepage/HeroSection";

export default function GuestHomePage({biz}: {biz?: string}){

    return (
        <main>
            <Navbar name={biz}/>
            <HeroSection name={biz}/>
        </main>
    )
}