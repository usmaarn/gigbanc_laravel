
import styles from "@/Components/dashboard/dashboard.module.css";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Notifications from "@/Components/Notifications";
import UserDropdown from "@/Components/UserDropdown";
import {Card} from "@/Components/ui/card";

export default function Navbar({open, toggle}: {
    open: boolean;
    toggle: () => void;
}) {
    return (
        <Card className={styles.navbar}>
            <div className="h-full px-3 md:px-5 flex items-center justify-between">
                <div className="flex items-center gap-4">

                    <h3 className="text-lg">
                        <ApplicationLogo />
                    </h3>
                </div>
                <div className="flex items-center gap-3">
                    <Notifications />
                    <UserDropdown />
                </div>
            </div>
        </Card>
    );
}
