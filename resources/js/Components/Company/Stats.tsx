import {Icon} from "@iconify/react";
import {Card, CardContent} from "@/Components/ui/card";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";

export default function Stats(){

    // @ts-ignore
    const {ambassadorsCount, subscribersCount, payouts}: PageProps & {
        ambassadorsCount: number;
        subscribersCount: number;
        payouts: number;
    } = usePage().props;


    return(
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-1">
            <Card>
                <CardContent  className="p-5 flex items-center">
                    <Icon icon="tabler:currency-naira" className="text-6xl mr-5"/>
                    <div className="space-y-1">
                        <h3 className="text-sm capitalize font-semibold">Total Payouts</h3>
                        <h2 className="text-2xl font-bold">₦{payouts}</h2>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-5 flex items-center">
                    <Icon icon="gravity-ui:person-worker" className="text-6xl mr-5"/>
                    <div className="space-y-1">
                        <h3 className="text-sm capitalize font-semibold">Ambassadors</h3>
                        <h2 className="text-2xl font-bold">{ambassadorsCount}</h2>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-5 flex items-center">
                    <Icon icon="gravity-ui:person-worker" className="text-6xl mr-5"/>
                    <div className="space-y-1">
                        <h3 className="text-sm capitalize font-semibold">Subscribers</h3>
                        <h2 className="text-2xl font-bold">{subscribersCount}</h2>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
