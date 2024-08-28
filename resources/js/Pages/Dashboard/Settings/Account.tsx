import {FormButton, FormInput} from "@/Components/form";
import {FormEvent} from "react";
import {useForm} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Car} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";

export default function Account(){

    const {data, post, setData, processing} = useForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
    });

    function handleSubmit(e:FormEvent){
        e.preventDefault();
    }

    return (
        <AuthenticatedLayout>
            <section className="max-w-6xl mx-auto space-y-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Settings</CardTitle>
                    </CardHeader>
                    <form className="">
                        <CardContent className="grid md:grid-cols-2 gap-5">
                            <FormInput label="First Name" defaultValue={data?.firstName}/>
                            <FormInput label="Last Name" defaultValue={data?.lastName}/>
                            <FormInput label="Email Address" defaultValue={data?.email}/>
                            <FormInput label="Phone Number" defaultValue={data?.phone}/>
                        </CardContent>

                        <CardFooter>
                            <FormButton className="w-auto">Update Profile</FormButton>
                        </CardFooter>
                    </form>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Update Password</CardTitle>
                    </CardHeader>
                    <form>
                        <CardContent className="grid md:grid-cols-2 gap-5">
                            <FormInput label="Old Password" type="password"/>
                            <FormInput label="New Password" type="password"/>
                            <FormInput label="Confirm Password" type="password"/>
                        </CardContent>
                        <CardFooter>
                            <FormButton className="w-auto">Change Password</FormButton>
                        </CardFooter>
                    </form>
                </Card>
            </section>
        </AuthenticatedLayout>
    )
}
