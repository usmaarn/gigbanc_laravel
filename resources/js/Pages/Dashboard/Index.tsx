import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import Stats from "@/Components/dashboard/Stats";
import Subscribers from "@/Components/dashboard/Subscribers";
import Ambassadors from "@/Components/dashboard/Ambassadors";
import {PageProps} from "@/types";
import AmbassadorStats from "@/Components/dashboard/AmbassadorStats";
import AmbassadorSubscribers from "@/Components/dashboard/AmbassadorSubscribers";
import {Card, CardContent} from "@/Components/ui/card";
import {Company} from "@/types/data";
import {useEffect, useState} from "react";


export default function Dashboard({auth, companies}: PageProps<{companies: Company[]}>) {

    const [company_id, setCode] = useState<string>("");

    useEffect(() => {
        setCode(route("company.onboard", {
            company: companies[0]?.username,
            user: auth?.user?.referral_code
        }))
    }, [])

    if (auth.isCompany){
        return (
            <AuthenticatedLayout>
                <section className="space-y-5">
                    <Stats />
                    <section className="grid md:grid-cols-2 gap-2">
                        <BarChartComponent title="Subscriptions"/>
                        <BarChartComponent title="Onboarded"/>
                    </section>
                    <Subscribers />
                    <Ambassadors />
                </section>
            </AuthenticatedLayout>
        )
    }

    return (
        <AuthenticatedLayout>
            <section className="space-y-5">
                <AmbassadorStats />

                <Card className="py-3 px-10">

                    <a href={code} target="_blank">{code}</a>
                </Card>


                <section className="grid md:grid-cols-2 gap-2">
                    <BarChartComponent title="Subscriptions"/>
                    <BarChartComponent title="Onboarded"/>
                </section>
                <AmbassadorSubscribers />
            </section>
        </AuthenticatedLayout>
    )
}
