import {FormButton, FormInput} from "@/Components/form";
import {FormEvent} from "react";
import {useForm} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Car} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {PageProps} from "@/types";
import {Company} from "@/types/data";
import {Input} from "@/Components/ui/input";
import {Snippet} from "@nextui-org/react";

export default function Account({company}: PageProps<{company: Company}>){

    const {data, post, setData, processing} = useForm({
        name: "",
        username: "",
        email: "",
        address: "",
        phone: "",
    });

    const companyUrl = `${location?.origin}/${company?.username}`;

    function handleSubmit(e:FormEvent){
        e.preventDefault();
    }

    return (
        <AuthenticatedLayout>
            <section className="max-w-6xl mx-auto space-y-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Company Profile</CardTitle>
                    </CardHeader>
                    <form className="">
                        <CardContent className="grid gap-5">
                            <div className="">
                                <p className="text-lg mb-2 font-semibold">Company Link</p>
                                <Snippet className="" symbol="">
                                    {companyUrl}
                                </Snippet>
                            </div>
                        </CardContent>

                        <CardFooter>
                            {/*<FormButton className="w-auto">Update Profile</FormButton>*/}
                        </CardFooter>
                    </form>
                </Card>
            </section>
        </AuthenticatedLayout>
    )
}
