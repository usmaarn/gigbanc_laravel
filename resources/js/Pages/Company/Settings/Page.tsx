import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {PageProps} from "@/types";
import {Input} from "@/Components/ui/input";
import CopyToClipboard from "@/Components/CopyToClipboard";
import {useState} from "react";

export default function Page({companyUrl}: PageProps<{
    companyUrl: string;
}>){

    const [apiToken, setApiToken] = useState("");

    return (
        <AuthenticatedLayout>
            <section className="max-w-6xl mx-auto space-y-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Company Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-5">
                        <div className="">
                            <h3 className="text-lg font-bold">Company Link</h3>
                            <div className="flex gap-1">
                                <Input value={companyUrl} readOnly/>
                                <CopyToClipboard text={companyUrl}/>
                            </div>
                        </div>

                        <div className="">
                            <h3 className="text-lg font-bold">Api Token</h3>
                            <div className="flex gap-1">
                                <Input value={companyUrl} readOnly/>
                                <CopyToClipboard text={companyUrl}/>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </AuthenticatedLayout>
    )
}
