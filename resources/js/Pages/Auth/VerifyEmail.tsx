import Guest from "@/Layouts/GuestLayout";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {FormButton} from "@/Components/form";
import {useForm} from "@inertiajs/react";
import {FormEvent, useState} from "react";

export default function VerifyEmail() {

    const {processing, post} = useForm();
    const [sent, setSent] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post(route("verification.send"));
        setSent(true);
    }

    return (
        <Guest>
            <Card>
                <CardHeader>
                    <CardTitle>Verify Email</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="max-w-[300px]" onSubmit={handleSubmit}>
                        {sent
                            ? <p className="text-lg mb-5 text-green-600">A verification link has been sent to your email address</p>
                            : <p className="text-lg mb-5">Please verify your email to start using this service</p>
                        }
                        <FormButton className="inline-block" loading={processing}>
                        {sent ? "Resend Verification Link" : "Send Verification Link"}
                        </FormButton>
                    </form>
                </CardContent>
            </Card>
        </Guest>
    )
}
