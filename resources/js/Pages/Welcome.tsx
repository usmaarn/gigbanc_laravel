import Navbar from "@/Components/HomePage/Navbar";
import HeroSection from "@/Components/HomePage/HeroSection";
import {Company} from "@/types/data";


export default function Welcome({company}: {company: Company}) {

    // const loginUrl = company ? route("company.login", company.username) : route("login");
    const loginUrl = route("login");
    const registerUrl = company ? route("company.register", company?.username) : route("register");

    return(
        <main>
            <Navbar loginUrl={loginUrl} registerUrl={registerUrl} name={company?.name} />
            <HeroSection loginUrl={loginUrl} registerUrl={registerUrl} name={company?.name} />
        </main>
    )
}
