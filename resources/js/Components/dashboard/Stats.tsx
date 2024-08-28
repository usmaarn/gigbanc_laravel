import {Icon} from "@iconify/react";
import {Card, CardContent} from "@/Components/ui/card";

export default  function Stats(){
    return(
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-1">
            <Card>
                <CardContent  className="p-5 flex items-center">
                    <Icon icon="gravity-ui:person-worker" className="text-6xl mr-5"/>
                    <div className="space-y-1">
                        <h3 className="text-sm capitalize font-semibold">Total Spending</h3>
                        <h2 className="text-2xl font-bold">₦2,130,000</h2>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-5 flex items-center">
                    <Icon icon="tabler:currency-naira" className="text-6xl mr-5"/>
                    <div className="space-y-1">
                        <h3 className="text-sm capitalize font-semibold">{`Today's Spending`}</h3>
                        <h2 className="text-2xl font-bold">₦230,000</h2>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-5 flex items-center">
                    <Icon icon="tabler:currency-naira" className="text-6xl mr-5"/>
                    <div className="space-y-1">
                        <h3 className="text-sm capitalize font-semibold">Pending Spending</h3>
                        <h2 className="text-2xl font-bold">₦156,000</h2>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
