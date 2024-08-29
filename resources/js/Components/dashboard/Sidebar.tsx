import styles from "@/Components/dashboard/dashboard.module.css";
import {Icon} from "@iconify/react";
import {FormEvent, HTMLAttributes, ReactNode} from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import {Card} from "@/Components/ui/card";
import {PageProps} from "@/types";

export default function Sidebar({open, onClose}: {
    open: boolean;
    onClose: () => void;
}){

    const {auth}: PageProps = usePage().props;

    const {post} = useForm();
    function handleSubmit(e: FormEvent){
        e.preventDefault();
        post(route("logout"))
    }

    return (
        <Card className={`${styles.sidebar} ${open && styles.active}`}>
            <div className="flex-grow flex flex-col px-3 py-5 overflow-y-auto gap-5">
                <SidebarMenuGroup label="Panel">
                    <SidebarItem label="Dashboard" icon="material-symbols:leaderboard-outline" href={route("dashboard")}/>
                    {auth.isCompany && <SidebarItem label="Ambassadors" icon="material-symbols:leaderboard-outline"
                                  href={route("company.ambassadors")}/>}
                    <SidebarItem label="Subscribers" icon="material-symbols:leaderboard-outline"
                                  href={route("dashboard.subscribers")}/>
                    <SidebarItem label="Leaderboard" icon="material-symbols:leaderboard-outline"
                                 href={route("dashboard.leaderboard")}/>
                    {/*{!auth.isCompany &&*/}
                    {/*    <SidebarItem label="Organizations" icon="material-symbols:leaderboard-outline"*/}
                    {/*              href={route("dashboard")}/>}*/}
                </SidebarMenuGroup>

                {/*{auth?.isCompany &&*/}
                {/*    <SidebarMenuGroup label="My Company">*/}
                {/*        <SidebarItem label="Users' Complaints" icon="material-symbols:leaderboard-outline" href={route('dashboard.complains')}/>*/}
                {/*    </SidebarMenuGroup>*/}
                {/*}*/}

                <SidebarMenuGroup label="Settings" className="mt-auto">
                    <SidebarItem label="Account Settings" icon="codicon:account" href={route('dashboard.settings')}/>
                    {auth.isCompany && <SidebarItem label="Company Link" icon="codicon:account" href={route('company.settings')}/>}
                    <form onSubmit={handleSubmit}>
                        <button className={`${styles.sidebarItem} ${styles.logout}`}>
                            <Icon icon="ant-design:logout-outlined" className="mr-2 text-lg"/>
                            <span className="text-[14px]">Logout</span>
                        </button>
                    </form>
                </SidebarMenuGroup>
            </div>
        </Card>
    )
}




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
