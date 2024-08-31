import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Stats from "@/Components/Company/Stats";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import SubscribersTable from "@/Components/Tables/SubscribersTable";
import TopAmbassador from "@/Components/Tables/TopAmbassador";
import {PageProps, Subscriber} from "@/types";
import {SubscribersChart} from "@/Components/charts/SubscribersChart";

export default function Page({recentSubscribers, charts, onboarded}: PageProps<{
    recentSubscribers: Subscriber[]
    charts: object[];
    onboarded: object[];
}>) {

    const chartData = [
        { date: "January", subscribers: 1816 },
        { date: "February", subscribers: 305 },
        { date: "March", subscribers: 237 },
        { date: "April", subscribers: 73 },
        { date: "May", subscribers: 209 },
        { date: "June", subscribers: 214 },
    ];

    return (
        <AuthenticatedLayout>
            <section className="space-y-5">
                <Stats />
                <section className="grid md:grid-cols-2 gap-2">
                    <BarChartComponent
                        showDateRange
                        data={charts}
                        dataKey="subscribers"
                        title="All Subscribers"
                        className="h-64"
                    />
                    <BarChartComponent
                        showDateRange
                        data={onboarded}
                        dataKey="subscribers"
                        title="Verified Subscribers"
                        className="h-64"
                    />
                </section>
                <SubscribersTable subscribers={recentSubscribers} title="Recent Subscribers" />
                <TopAmbassador />
            </section>
        </AuthenticatedLayout>
    )
}
