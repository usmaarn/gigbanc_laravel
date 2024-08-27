import Link from "next/link";
import styles from "@/styles/dashboard.module.css";
import {Icon} from "@iconify/react";
import {HTMLAttributes, ReactNode} from "react";

type SidebarItemProps = HTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    icon: string;
    href: string;
    label: string;
    hide?: boolean;
}
export function SidebarItem({className, href, label, icon, hide, ...props}: SidebarItemProps) {
    if (hide) return null;
    return (
        <Link
            className={`${styles.sidebarItem} ${className}`}
            href={href}
            {...props}
        >
            <Icon icon={icon} className="text-lg mr-2" />
            <span className="text-[15px]">{label}</span>
        </Link>
    );
}

export function SidebarMenuGroup({label, children, className, hide}: {
    label: string;
    children: ReactNode;
    className?: string;
    hide?: boolean;
}) {

    if (hide) return null;

    return (
        <div className={`space-y-1 ${className}`}>
            <h6 className="capitalize text-[12.5px] px-2 text-gray-500 font-medium">{label}</h6>
            {children}
        </div>
    )
}