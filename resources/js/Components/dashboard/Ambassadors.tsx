import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";
import {PageProps} from "@/types";
import {Ambassador} from "@/types/data";
import {usePage} from "@inertiajs/react";

export default function Ambassadors() {
    const props: PageProps<{ambassadors : Ambassador[]}> = usePage().props;
    const ambassadors = props?.ambassadors ?? [];

    return (
        <Card>
            <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                    <div className="">
                        <CardTitle>Ambassadors</CardTitle>
                        <CardDescription>
                            A list of all your ambassadors.
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Rank</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Onboarded</TableHead>
                            <TableHead>Completed</TableHead>
                            <TableHead>UnCompleted</TableHead>
                            <TableHead>Earnings</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ambassadors.map((ambassador: Ambassador, index) => (
                            <TableRow key={ambassador?.id}>
                                <TableCell className="font-medium">
                                    {index + 1}
                                </TableCell>
                                <TableCell className="whitespace-nowrap">
                                    {ambassador.first_name} {ambassador.last_name}
                                </TableCell>
                                <TableCell>{ambassador.email}</TableCell>
                                <TableCell>
                                    {ambassador?.subscribers?.count.toLocaleString() ?? 0}
                                </TableCell>
                                <TableCell>
                                    {ambassador?.subscribers?.verified.toLocaleString() ?? 0}
                                </TableCell>
                                <TableCell>
                                    {ambassador?.subscribers?.unverified.toLocaleString() ?? 0}
                                </TableCell>
                                <TableCell>
                                    N
                                    {(
                                        ambassador?.subscribers?.verified * 1500
                                    ).toLocaleString()}
                                </TableCell>
                                <TableCell>
                                    {/*<EditAmbassador ambassador={ambassador as User} />*/}
                                    {/*<DeleteAmbassador id={ambassador.id} />*/}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
