import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AmbassadorStats from "@/Components/Ambassador/Stats";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import SubscribersTable from "@/Components/Tables/SubscribersTable";
import ReferralLink from "@/Components/Ambassador/ReferralLink";
import {PageProps, Subscriber} from "@/types";

export default function Page({recentSubscribers, charts, onboarded}: PageProps<{
    recentSubscribers: Subscriber[]
    charts: object[];
    onboarded: object[];
}>){

    console.log(onboarded)

    return (
        <AuthenticatedLayout>
            <section className="space-y-5">
                <AmbassadorStats/>
                <ReferralLink />
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
            </section>
        </AuthenticatedLayout>
    )
}
