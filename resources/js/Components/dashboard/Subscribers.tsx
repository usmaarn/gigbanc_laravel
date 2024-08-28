

export default async function Subscribers(){
    const subscribers = await getCompanySubscribers("bynagro") as Subscriber[] ?? [];

    return (
        <Card>
            <CardHeader className="border-b">
                <CardTitle>Latest Subscribers</CardTitle>
                <CardDescription>A list of your recent 5 subscribers.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Organization</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {subscribers.map((subscriber, index) => (
                            <TableRow key={subscriber.id}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell className="whitespace-nowrap">{subscriber.name}</TableCell>
                                <TableCell>{subscriber.email}</TableCell>
                                <TableCell>{subscriber.type}</TableCell>
                                <TableCell className="capitalize text-blue-500 font-medium">
                                    <Link className="hover:underline" href="#">
                                        {subscriber?.company.name}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className={subscriber.status == "onboarded"
                                        ? "text-green-800 bg-green-100" : "text-red-800 bg-red-100"
                                    }>
                                        {subscriber.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    Edit
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>

        </Card>
    )
}
