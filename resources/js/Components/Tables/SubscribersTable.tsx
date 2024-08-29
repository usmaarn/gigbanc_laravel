import DataTable from "@/Components/DataTable";
import {useMemo} from "react";
import {ColumnDef} from "@tanstack/react-table";
import {DateTime} from "luxon";
import {Subscriber} from "@/types";
import {Badge} from "@/Components/ui/badge";

export default function SubscribersTable({subscribers, title, ...props}: {
    subscribers: Subscriber[];
    title?: string
    withPagination?: boolean;
    searchable?: boolean;
}) {

    const data = useMemo(() => subscribers ?? [], []);

    const columns: ColumnDef<Subscriber>[] = [
        {
            header: "Index",
            accessorKey: "id",
            cell: info => info.row.index + 1
        },
        {
            header: "Name",
            accessorKey: "name"
        },
        {
            header: "Email",
            accessorKey: "emailAddress",
        },
        {
            header: "Category",
            accessorKey: "category",
        },
        {
            header: "Organization",
            accessorKey: "organization",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: info =>  {
                const status = info.getValue() as string;
                return (
                    <Badge
                        className="whitespace-nowrap"
                        variant={status == "VERIFIED" ? "success" : "secondary"}
                    >
                        {status == "VERIFIED" ? "Verified" : "In Progress"}
                    </Badge>
                )
            }
        },
        {
            header: "Date",
            accessorKey: "createdAt",
            cell: info => DateTime.fromISO(info.getValue() as string).toLocaleString(DateTime.DATE_MED)
        }
    ]

    return <DataTable
        data={data}
        columns={columns}
        title={title}
        {...props}
    /> ;
}
