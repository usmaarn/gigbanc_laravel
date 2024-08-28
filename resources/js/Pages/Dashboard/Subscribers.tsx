import {Ambassador, Subscriber} from "@/types/data";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {FormInput} from "@/Components/form";
import AddAmbassador from "@/Components/modals/AddAmbassador";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";
import EditAmbassador from "@/Components/modals/EditAmbassador";
import DeleteAmbassador from "@/Components/modals/DeleteAmbassador";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import AddSubscriber from "@/Components/modals/AddSubscriber";
import {Badge} from "@/Components/ui/badge";
import {PageProps} from "@/types";
import EditSubscriber from "@/Components/modals/EditSubscriber";
import DeleteSubscriber from "@/Components/modals/DeleteSubscriber";


export default function Ambassadors({subscribers, auth}: PageProps<{subscribers: Subscriber[]}>) {
    subscribers = subscribers ?? [];

    return (
        <AuthenticatedLayout>
            <Card>
                <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <CardTitle>Subscribers</CardTitle>
                            <CardDescription>A list of all your subscribers.</CardDescription>
                        </div>
                        <div className="flex items-center gap-3">
                            <FormInput placeholder="Search record"/>
                            {!auth.isCompany && <AddSubscriber/>}
                        </div>
                    </div>
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
                                        <Badge variant="secondary" className="whitespace-nowrap">
                                            {subscriber.status == "5" ? "In Progress" : "Verified"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="space-x-3">
                                        <EditSubscriber subscriber={subscriber} />
                                        <DeleteSubscriber id={subscriber.id} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    )
}
