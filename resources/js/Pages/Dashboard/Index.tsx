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
import {FormInput, FormSelect} from "@/Components/form";
import {SelectItem} from "@/Components/ui/select";


export default function Dashboard({auth, companies}: PageProps<{companies: Company[]}>) {

    const [company, setCompany] = useState<string>("");
    const [code, setCode] = useState<string>("");

    useEffect(() => {
        if (!auth?.isCompany){
            setCode(route("company.onboard", {
                company:company,
                user: auth?.user?.referral_code
            }))
        }
    }, [company])

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

                <Card className="py-3 px-10 grid gap-5 md:grid-cols-2">
                    <FormSelect label="Organization" onValueChange={(e) => setCompany(e)}>
                        {companies.map(c => (
                            <SelectItem value={c.username?.toString()}>{c.name}</SelectItem>
                        ))}
                    </FormSelect>
                    <FormInput label="Referral Link" readOnly value={code} />
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
