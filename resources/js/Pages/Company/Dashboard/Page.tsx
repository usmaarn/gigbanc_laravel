import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Stats from "@/Components/Company/Stats";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import SubscribersTable from "@/Components/Tables/SubscribersTable";
import TopAmbassador from "@/Components/Tables/TopAmbassador";
import {PageProps, Subscriber} from "@/types";

export default function Page({recentSubscribers}: PageProps<{
    recentSubscribers: Subscriber[]
}>) {
    return (
        <AuthenticatedLayout>
            <section className="space-y-5">
                <Stats />
                <section className="grid md:grid-cols-2 gap-2">
                    <BarChartComponent title="Subscriptions"/>
                    <BarChartComponent title="Onboarded"/>
                </section>
                <SubscribersTable subscribers={recentSubscribers} title="Recent Subscribers" />
                <TopAmbassador />
            </section>
        </AuthenticatedLayout>
    )
}
