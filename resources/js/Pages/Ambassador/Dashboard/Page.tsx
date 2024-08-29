import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AmbassadorStats from "@/Components/dashboard/AmbassadorStats";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import SubscribersTable from "@/Components/Tables/SubscribersTable";
import ReferralLink from "@/Components/Ambassador/ReferralLink";
import {PageProps, Subscriber} from "@/types";

export default function Page({recentSubscribers}: PageProps<{
    recentSubscribers: Subscriber[]
}>){
    return (
        <AuthenticatedLayout>
            <section className="space-y-5">
                <AmbassadorStats/>
                <ReferralLink />
                <section className="grid md:grid-cols-2 gap-2">
                    <BarChartComponent title="Subscriptions"/>
                    <BarChartComponent title="Onboarded"/>
                </section>
                <SubscribersTable subscribers={recentSubscribers} title="Recent Subscribers" />
            </section>
        </AuthenticatedLayout>
    )
}
