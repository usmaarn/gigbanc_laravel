import {Link, useForm} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {FormButton, FormInput} from "@/Components/form";
import Guest from "@/Layouts/GuestLayout";
import {Company} from "@/types/data";
import {ChangeEvent, FormEvent} from "react";


export default function Register({company}: {company: Company}) {

    const {data, setData, post, processing, errors} = useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post(route("regi", company.username))
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setData(name, value);
    }

    return (
        <Guest name={company.name}>
            <section className="w-full max-w-[600px] mx-auto">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Ambassador Account</CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-5">
                            <FormInput error={errors?.firstName} label="First Name" value={data?.firstName} name="firstName" onChange={handleChange}/>
                            <FormInput error={errors?.lastName} label="Last Name" name="lastName" value={data?.lastName} onChange={handleChange}/>
                            <FormInput error={errors?.email} label="Email Address" name="email" type="email" value={data?.email} onChange={handleChange}/>
                            <FormInput error={errors?.phone} label="Phone Number" name="phone" type="tel" value={data?.phone} onChange={handleChange}/>
                            <FormInput type="password" error={errors?.password} label="Password"  value={data?.password} name="password" onChange={handleChange}/>
                            <FormInput type="password" error={errors?.password} label="Password"  value={data?.password_confirmation} name="password_confirmation" onChange={handleChange}/>
                        </CardContent>
                        <CardFooter className="space-x-5">
                            <FormButton type="submit" size="default" className="w-auto">Register</FormButton>
                            <Link href={route("login")}>
                                <Button variant="outline">Sign In</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </form>
            </section>
        </Guest>
    );
}
