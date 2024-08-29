import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import Stats from "@/Components/dashboard/Stats";
import Subscribers from "@/Components/dashboard/Subscribers";
import Ambassadors from "@/Components/dashboard/Ambassadors";
import {PageProps} from "@/types";
import AmbassadorStats from "@/Components/dashboard/AmbassadorStats";
import AmbassadorSubscribers from "@/Components/dashboard/AmbassadorSubscribers";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {Company} from "@/types/data";
import {useEffect, useState} from "react";
import {FormInput, FormSelect} from "@/Components/form";
import {SelectItem} from "@/Components/ui/select";
import {Snippet} from "@nextui-org/react";


export default function Dashboard({auth, organizations}: PageProps<{organizations: Company[]}>) {
    const organization = organizations[0];

    const referralLink = route("company.onboard", {
        user: auth?.user?.referral_code,
        company: organization?.username
    });

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
                <AmbassadorStats/>

                <div className="p-3 bg-white rounded-lg shadow flex items-start flex-col gap-1">
                    <h3 className="font-semibold">Refferal Code</h3>
                    <div className="flex gap-1">
                        <Snippet className="sm:hidden" hideSymbol content={referralLink}  />
                        <Snippet hideSymbol>{referralLink}</Snippet>
                    </div>
                </div>


                <section className="grid md:grid-cols-2 gap-2">
                    <BarChartComponent title="Subscriptions"/>
                    <BarChartComponent title="Onboarded"/>
                </section>
                <AmbassadorSubscribers/>
            </section>
        </AuthenticatedLayout>
    )
}
