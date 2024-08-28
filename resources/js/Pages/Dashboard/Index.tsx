import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import Stats from "@/Components/dashboard/Stats";


export default function Dashboard() {
    return (
        <AuthenticatedLayout>

            <Stats />

            <section className="grid md:grid-cols-2 gap-2 mt-5">
                <BarChartComponent title="Subscriptions"/>
                <BarChartComponent title="Onboarded"/>
            </section>
        </AuthenticatedLayout>
    )
}
