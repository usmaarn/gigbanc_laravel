import {Link, usePage} from "@inertiajs/react";
import {Subscriber} from "@/types/data";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";
import {Badge} from "@/Components/ui/badge";
import {PageProps} from "@/types";
import {FormInput} from "@/Components/form";
import AddSubscriber from "@/Components/modals/AddSubscriber";


export default function Subscribers(){
    const props: PageProps<{subscribers : Subscriber[]}> = usePage().props;
    const subscribers = props?.subscribers ?? [];

    return (
        <Card>
            <CardHeader className="border-b">
                <CardTitle>Subscribers</CardTitle>
                <CardDescription>A list of all your subscribers.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Id</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Organization</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {subscribers.map((subscriber: Subscriber, index) => (
                            <TableRow key={subscriber?.id}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell className="whitespace-nowrap">
                                    {subscriber.name}
                                </TableCell>
                                <TableCell>{subscriber.email}</TableCell>
                                <TableCell>{subscriber?.category?.name}</TableCell>
                                <TableCell>{subscriber?.organization.name}</TableCell>
                                <TableCell>
                                    <Badge variant="destructive" className="whitespace-nowrap">
                                        {subscriber.status == "5" ? "NOT ONBOARDED" : "ONBOARDED"}
                                    </Badge>
                                </TableCell>
                                <TableCell className="space-x-3">
                                    <span>Edit</span>
                                    <span>Delete</span>
                                    {/*<EditAmbassador subscriber={subscriber} />*/}
                                    {/*<DeleteAmbassador id={subscriber.id} />*/}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
