import Navbar from "@/Components/HomePage/Navbar";
import {Company} from "@/types/data";
import HeroSection from "@/Pages/Home/HeroSection";

export default function Page({company}: {company: Company}){
    const loginUrl = route("login");
    const registerUrl = company ? route("ambassador.register", company?.username) : route("register");

    return(
        <>
            <Navbar loginUrl={loginUrl} registerUrl={registerUrl} name={company?.name} />
            <HeroSection />
        </>
    )
}
