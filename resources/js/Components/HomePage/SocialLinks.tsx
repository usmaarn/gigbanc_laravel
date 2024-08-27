import Link from "next/link";
import {Icon} from "@iconify/react";

const socials = [
    {icon: "uiw:facebook", link: "#"},
    {icon: "bi:twitter", link: "#"},
    {icon: "teenyicons:instagram-solid", link: "#"},
    {icon: "bi:linkedin", link: "#"},
    {icon: "fluent:mail-32-filled", link: "#"},
]


export default function SocialLinks(){
    return (
        <div className="flex items-center gap-4 text-gray-500">
            {socials.map(social =>
                <Link href={social.link} key={social.icon}>
                    <Icon
                        icon={social.icon}
                        className="text-2xl transition-all duration-300 hover:scale-150"
                    />
                </Link>
            )}
        </div>
    )
}