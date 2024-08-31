
import styles from "@/Components/dashboard/dashboard.module.css";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Notifications from "@/Components/Notifications";
import UserDropdown from "@/Components/UserDropdown";
import {Card} from "@/Components/ui/card";
import {PageProps} from "@/types";
import {usePage} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {MenuIcon, XIcon} from "lucide-react";

export default function Navbar({open, toggle}: {
    open: boolean;
    toggle: () => void;
}) {

    const {auth}: PageProps = usePage().props;

    return (
        <Card className={styles.navbar}>
            <div className="h-full px-3 md:px-5 flex items-center justify-between">
                <div className="flex items-center gap-4">

                    <h3 className="text-lg">
                        <ApplicationLogo />
                    </h3>
                </div>
                <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block">
                        {auth?.companyName ?? auth?.user?.firstName}
                    </span>
                    <Notifications />
                    <UserDropdown />
                    <Button
                        size="icon"
                        className="inline-flex md:hidden"
                        variant="outline"
                        onClick={toggle}
                    >
                        {open ? <XIcon /> : <MenuIcon/>}
                    </Button>
                </div>
            </div>
        </Card>
    );
}
