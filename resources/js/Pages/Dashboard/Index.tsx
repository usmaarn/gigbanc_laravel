import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {BarChartComponent} from "@/Components/charts/BarChartComponent";
import Stats from "@/Components/dashboard/Stats";
import Subscribers from "@/Components/dashboard/Subscribers";
import Ambassadors from "@/Components/dashboard/Ambassadors";
import {PageProps} from "@/types";
import AmbassadorStats from "@/Components/dashboard/Stats";
import AmbassadorSubscribers from "@/Components/dashboard/AmbassadorSubscribers";
import {Company} from "@/types/data";
import {useState} from "react";
import {FormSelect} from "@/Components/form";
import {SelectItem} from "@/Components/ui/select";
import CopyToClipboard from "@/Components/CopyToClipboard";
import {Input} from "@/Components/ui/input";


export default function Dashboard({auth, organizations}: PageProps<{organizations: Company[]}>) {

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

    else {
        const [company, setCompany] = useState<string>(organizations[0].username);
        const referralLink = route("company.onboard", {user: auth?.user?.referral_code, company});

        return (
            <AuthenticatedLayout>
                <section className="space-y-5">
                    <AmbassadorStats/>

                    <div className="shadow bg-white p-3 rounded-xl grid md:grid-cols-2 gap-5 overflow-hidden w-full">
                        <FormSelect label="Select Organization"
                                defaultValue={company}
                                onValueChange={e => setCompany(e)}
                        >
                            {organizations.map(org => (
                                <SelectItem key={org.id} value={org.username.toString()}>{org.name}</SelectItem>
                            ))}
                        </FormSelect>
                        <div className="">
                            <p>Referral Link</p>
                            <div className="flex gap-1">
                                <Input value={referralLink} readOnly />
                                <CopyToClipboard text={referralLink} title="Referral link" />
                            </div>
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
}
