import {Link, useForm} from "@inertiajs/react";
import {FormButton, FormInput, FormTextarea} from "@/Components/form";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {Separator} from "@/Components/ui/separator";
import {Button} from "@/Components/ui/button";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {ChangeEvent} from "react";


export default function Register() {
    const {data, setData, post, processing, errors} = useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        companyName: "",
        companyEmail: "",
        companyPhone: "",
        companyUsername: "",
        companyAddress: "",
        companyDescription: "",
    })

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        post(route("register"))
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setData(name, value);
    }


    return (
        <section
            className="max-w-screen min-h-screen py-10 md:py-20 px-3 flex flex-col items-center justify-center gap-5">
            <ApplicationLogo />
            <section className="w-full max-w-[600px] mx-auto">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Business Account</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <h3 className="sm:col-span-2 font-semibold mb-3">Personal Information</h3>
                            <div className="grid sm:grid-cols-2 gap-5 ">
                                <FormInput error={errors?.firstName} label="First Name" value={data?.firstName} name="firstName" onChange={handleChange}/>
                                <FormInput error={errors?.lastName} label="Last Name" name="lastName" value={data?.lastName} onChange={handleChange}/>
                                <FormInput error={errors?.email} label="Email Address" name="email" type="email" value={data?.email} onChange={handleChange}/>
                                <FormInput error={errors?.phone} label="Phone Number" name="phone" type="tel" value={data?.phone} onChange={handleChange}/>
                            </div>

                            <Separator className="my-5"/>

                            <h3 className="sm:col-span-2 font-semibold mb-3">Business Information</h3>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <FormInput error={errors?.companyName} label="Business Name" name="companyName"
                                           value={data?.companyName} onChange={handleChange}/>
                                <FormInput error={errors?.companyEmail} label="Business Email" name="companyEmail"
                                           value={data?.companyEmail} onChange={handleChange}/>
                                <FormInput error={errors?.companyPhone} label="Phone Number" name="companyPhone"
                                           type="tel" value={data?.companyPhone} onChange={handleChange}/>
                                <FormInput error={errors?.companyUsername} label="Unique Business Name"
                                           name="companyUsername" value={data?.companyUsername} onChange={handleChange}/>
                                <FormInput error={errors?.companyAddress} className="sm:col-span-2"
                                           label="Business Address" name="companyAddress"
                                           value={data?.companyAddress} onChange={handleChange}/>
                                <FormTextarea error={errors?.companyDescription} className="sm:col-span-2"
                                              label="Business Description" maxLength={255} name="companyDescription"
                                              value={data?.companyDescription} onChange={handleChange}/>
                            </div>
                            <Separator className="my-5"/>
                            <h3 className="sm:col-span-2 font-semibold mb-3">Account Security</h3>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <FormInput type="password" error={errors?.password} label="Password"
                                           name="password" onChange={handleChange}/>
                                <FormInput type="password" error={errors?.password} label="Confirm Password"
                                           name="password_confirmation" onChange={handleChange}/>
                            </div>
                        </CardContent>
                        <CardFooter className="space-x-3">
                            <FormButton loading={processing} type="submit" size="default" className="w-auto">Register</FormButton>
                            <Link href={route("login")}>
                                <Button variant="outline">Sign In</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </form>
            </section>
        </section>
    );
}
