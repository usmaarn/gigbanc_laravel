import Guest from "@/Layouts/GuestLayout";
import {Company} from "@/types/data";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {Link} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";

export default function OnboardingSuccess({company}: {company: Company}) {
    return(
        <Guest name={company?.name}>
            <Card>
                <CardHeader>
                    <CardTitle>Form Submitted Successfully!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>You have been successfully subscribed</p>
                    <p> please finish your onboarding for this subscription to count.</p>
                    <p>Thank You.</p>
                </CardContent>
                <CardFooter>
                    <Link href={route("company.landing", company.username)}>
                        <Button>Back To Home</Button>
                    </Link>
                </CardFooter>
            </Card>
        </Guest>
    )
}
