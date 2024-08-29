import DataTable from "@/Components/DataTable";
import {useMemo} from "react";
import {ColumnDef} from "@tanstack/react-table";
import {usePage} from "@inertiajs/react";
import {Ambassador, PageProps} from "@/types";


export default function TopAmbassador() {

    const {topAmbassadors}: PageProps<{topAmbassadors: Ambassador[] }> = usePage().props;

    const ambassadors = topAmbassadors ?? [];

    const memoData = useMemo(() => ambassadors, []);

    const columns: ColumnDef<Ambassador>[] = [
        {
            header: "Rank",
            accessorKey: "id",
            cell: info => info.row.index + 1
        },
        {
            header: "Name",
            accessorFn: row => `${row.firstName} ${row.lastName}`
        },
        {
            header: "Email",
            accessorKey: "emailAddress",
        },
        {
            header: "Subscribers",
            accessorFn: cell => cell.subscribers.total,
        },
        {
            header: "Verified",
            accessorFn: cell => cell.subscribers.verified,
        },
        {
            header: "Processing",
            accessorFn: cell => cell.subscribers.processing,
        }
    ]

    return <DataTable
        data={ambassadors}
        columns={columns}
        title="Top Ambassadors"
    /> ;
}
