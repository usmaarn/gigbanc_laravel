import {Link, useForm} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {FormButton, FormInput} from "@/Components/form";


export default function Register() {

    const {data, setData, post, processing, errors} = useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirmation: "",
    })


    return (
        <section className="w-full max-w-[600px] mx-auto">
            <form >
                <Card>
                    <CardHeader>
                        <CardTitle>Individual Account</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-5">
                        <FormInput error={errors?.firstName} label="First Name" name="firstName"/>
                        <FormInput error={errors?.lastName} label="Last Name" name="lastName"/>
                        <FormInput error={errors?.email} label="Email Address" name="email" type="email"/>
                        <FormInput error={errors?.phone} label="Phone Number" name="phone" type="tel"/>
                        <FormInput error={errors?.password} label="Password" name="password" type="password"/>
                        <FormInput error={errors?.passwordConfirmation} label="Confirm Password"
                                   name="passwordConfirmation" type="password"/>
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
    );
}
