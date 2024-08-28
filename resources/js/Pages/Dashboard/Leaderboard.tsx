import {Ambassador} from "@/types/data";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";
import EditAmbassador from "@/Components/modals/EditAmbassador";
import DeleteAmbassador from "@/Components/modals/DeleteAmbassador";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


export default function Ambassadors({ambassadors}: {ambassadors: Ambassador[]}) {
    ambassadors = ambassadors ?? [];

    return (
        <AuthenticatedLayout>
            <Card>
                <CardHeader className="border-b">
                    <CardTitle>Leaderboard</CardTitle>
                    <CardDescription>Top Performing ambassadors.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Rank</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Registered</TableHead>
                                <TableHead>Verified</TableHead>
                                <TableHead>Not Verified</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {ambassadors.map((ambassador: Ambassador, index) => (
                                <TableRow key={ambassador?.id}>
                                    <TableCell className="font-medium">{index + 1}</TableCell>
                                    <TableCell className="whitespace-nowrap">
                                        {ambassador.first_name} {ambassador.last_name}
                                    </TableCell>
                                    <TableCell>{ambassador.email}</TableCell>
                                    <TableCell>{ambassador?.subscribers?.count.toLocaleString() ?? 0}</TableCell>
                                    <TableCell>{ambassador?.subscribers?.verified.toLocaleString() ?? 0}</TableCell>
                                    <TableCell>{ambassador?.subscribers?.unverified.toLocaleString() ?? 0}</TableCell>
                                    <TableCell>
                                        <EditAmbassador ambassador={ambassador} />
                                        <DeleteAmbassador id={ambassador.id} />
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
