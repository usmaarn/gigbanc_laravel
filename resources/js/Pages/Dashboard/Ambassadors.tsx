import {Ambassador} from "@/types/data";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "@/Components/DataTable";
import {useMemo} from "react";
import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/Components/ui/button";
import {ArrowDown} from "lucide-react";
import {DateTime} from "luxon";


export default function Ambassadors({ambassadors}: {ambassadors: Ambassador[]}) {
    ambassadors = ambassadors ?? [];

    const memoData = useMemo(() => ambassadors, []);

    const columns: ColumnDef<Ambassador>[] = [
        {
            header: "ID",
            accessorKey: "id",
            footer: "ID"
        },
        {
            header: "Name",
            accessorFn: row => `${row.first_name} ${row.last_name}`,
            footer: "Name"
        },
        {
            header: "First Name",
            accessorKey: "first_name",
            footer: "First Name"
        },
        {
            header: "Last Name",
            accessorKey: "last_name",
            footer: "Last Name"
        },
        {
            header: ({column}) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email <ArrowDown className="ml-2 size-4" />
                </Button>
            ),
            accessorKey: "email",
            footer: "Email"
        },
        {
            header: ({column}) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date <ArrowDown className="ml-2 size-4" />
                </Button>
            ),
            accessorKey: "created_at",
            footer: "Date Joined",
            cell: info => DateTime.fromISO(info.getValue() as string).toLocaleString(DateTime.DATE_MED)
        }
    ]

    return (
        <AuthenticatedLayout>
            <DataTable data={ambassadors} columns={columns} />
        </AuthenticatedLayout>
    )
}
