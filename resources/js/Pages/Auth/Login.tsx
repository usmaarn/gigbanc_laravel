import Guest from "@/Layouts/GuestLayout";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {FormButton, FormCheckbox, FormInput} from "@/Components/form";
import {Link, useForm} from "@inertiajs/react";
import {FormEvent} from "react";


export default function Login(){

    const {data, errors, setData, post, processing} = useForm({
        email: "",
        password: "",
        remember: false,
        message: "",
    })

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        post(route("login"))
    }

    return(
        <Guest>
            <section className="w-full max-w-[400px] mx-auto">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {errors?.message && (
                                <p className="text-center text-sm font-semibold text-red-600">
                                    {errors?.message}
                                </p>
                            )}

                            <FormInput error={errors?.email} label="Email Address" type="email"
                                value={data.email} onChange={(e) => setData("email", e.target.value)}/>
                            <FormInput error={errors?.password} label="Password" type="password"
                                       value={data.password} onChange={(e) => setData("password", e.target.value)}/>

                            <div className="flex justify-between font-medium">
                                <FormCheckbox value={data?.remember} label="Remember Me" name="remember"
                                              onChange={() => setData("remember", !data.remember)}/>
                                <Link href={route("password.request")} className="hover:underline text-sm text-indigo-500">
                                    Forgot Password
                                </Link>
                            </div>

                        </CardContent>
                        <CardFooter className="block space-y-5">
                            <FormButton loading={processing} type="submit" size="default">Login</FormButton>

                            <div className="text-sm  text-indigo-500 font-medium text-right">
                                <Link href={route("register")} className="hover:underline">
                                    Create An Account
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </form>
            </section>
        </Guest>
    )
}
