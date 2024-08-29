import {FormSelect} from "@/Components/form";
import {SelectItem} from "@/Components/ui/select";
import {Input} from "@/Components/ui/input";
import CopyToClipboard from "@/Components/CopyToClipboard";
import {useState} from "react";
import {Company, PageProps} from "@/types";
import {usePage} from "@inertiajs/react";

export default function ReferralLink(){

    const {auth, organizations}:PageProps<{organizations: Company[] }> = usePage().props;

    const companies = organizations ?? [];
    const disable = companies.length <= 0;

    const [company, setCompany] = useState<string>(companies[0]?.username ?? "");
    const referralLink = route("company.onboard", {user: auth?.user?.referralCode, company});

    return (
        <div className="shadow bg-white p-3 rounded-xl grid md:grid-cols-2 gap-5 overflow-hidden w-full">
            <FormSelect label="Select Organization"
                        defaultValue={company}
                        onValueChange={e => setCompany(e)}
                        disabled={disable}
            >
                {companies.map(org => (
                    <SelectItem key={org.id} value={org.username.toString()}>{org.name}</SelectItem>
                ))}
            </FormSelect>
            <div className="">
                <p>Referral Link</p>
                <div className="flex gap-1">
                    <Input
                        className="disabled:pointer-events-none"
                        disabled={disable}
                        value={referralLink}
                        readOnly
                    />
                    <CopyToClipboard
                        disabled={disable}
                        text={referralLink}
                        title="Referral link"
                    />
                </div>
            </div>
        </div>
    )
}
