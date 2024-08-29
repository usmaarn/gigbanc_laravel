import {ReactNode, useState} from "react";
import Navbar from "@/Components/dashboard/Navbar";
import Sidebar from "@/Components/dashboard/Sidebar";
import styles from "@/Components/dashboard/dashboard.module.css";
import {Toaster} from "@/Components/ui/sonner";
import {NextUIProvider} from "@nextui-org/react";

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    return(
        <NextUIProvider>
            <section className="">
                <Navbar open={open} toggle={() => setOpen(!open)}/>
                <section className="">
                    <Sidebar open={open} onClose={() => setOpen(false)}/>
                    <div className={styles.main}>
                        {children}
                    </div>
                </section>
                <Toaster closeButton richColors position="top-right"/>
            </section>
        </NextUIProvider>
    )
}
