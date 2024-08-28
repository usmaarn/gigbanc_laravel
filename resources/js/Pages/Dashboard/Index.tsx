import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import Stats from "@/Components/dashboard/Stats";
import Subscribers from "@/Components/dashboard/Subscribers";
import Ambassadors from "@/Components/dashboard/Ambassadors";
import {PageProps} from "@/types";
import AmbassadorStats from "@/Components/dashboard/AmbassadorStats";
import AmbassadorSubscribers from "@/Components/dashboard/AmbassadorSubscribers";


export default function Dashboard({auth}: PageProps) {

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
                <section className="grid md:grid-cols-2 gap-2">
                    <BarChartComponent title="Subscriptions"/>
                    <BarChartComponent title="Onboarded"/>
                </section>
                <AmbassadorSubscribers />
            </section>
        </AuthenticatedLayout>
    )
}
