import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Company, PageProps} from "@/types";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {Button} from "@/Components/ui/button";
import {Badge} from "@/Components/ui/badge";
import {useForm} from "@inertiajs/react";
import {toast} from "sonner";
import {useState} from "react";
import {Loader2} from "lucide-react";

export default function ExplorePage({companies}: PageProps<{companies: Company[]}>) {

    return(
        <AuthenticatedLayout>
            <h1 className="text-3xl font-semibold mb-5">Companies</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {companies.map(company => <CompanyCard key={company.id} company={company} />)}
            </div>
        </AuthenticatedLayout>
    )
}


function CompanyCard({company}: {company: Company}){
    const isPublic = parseInt(company.mode) === 4;
    const [isJoined, setIsJoined] = useState(false);

    const {post, processing} = useForm();
    async function joinCompany(){
        post(route("ambassador.companies.join", company.id), {
            onSuccess: () => {
                toast.success("Successfully joined company")
                setIsJoined(true)
            },
            onError: () => toast.error("An error occurred"),
        });
    }

    return(
        <Card key={company.id} className="relative">
            <Badge className="absolute top-1 right-1">
                {isPublic ? "PUBLIC" : "PRIVATE"}
            </Badge>
            <CardHeader className="p-0">
                <div className="h-36 bg-gray-100 flex items-center justify-center text-5xl text-gray-300">
                    {company.name.split(" ")[0]}
                </div>
            </CardHeader>
            <CardContent className="p-5">
                <h4 className="text-lg font-semibold line-clamp-1">{company.name}</h4>
                <p className="text-gray-500 line-clamp-1">{company.description}</p>
                <p className="text-sm font-bold hidden">
                    Pay: <span className="inline-block font-medium">N3,000/Sub</span>
                </p>
                <div className="mt-2">
                    <Button onClick={joinCompany} size="sm" className="h-7 text-sm gap-2" disabled={processing}>
                        {processing && <Loader2 className="animate-spin" />}
                        {processing ? "Joining" : isJoined ? "Joined" : "Join Company"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
