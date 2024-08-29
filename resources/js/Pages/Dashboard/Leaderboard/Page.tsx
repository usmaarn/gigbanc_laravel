import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Ambassador} from "@/types";
import {useMemo} from "react";
import {ColumnDef} from "@tanstack/react-table";
import DataTable from "@/Components/DataTable";


export default function Page({ambassadors}: {ambassadors: Ambassador[]}) {
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
            header: "Subscribers",
            accessorFn: row => `${row.subscribers.total} Subscribers`
        }
    ]

    return(
        <AuthenticatedLayout>
            <DataTable
                data={memoData}
                columns={columns}
                title="Top Ambassadors"
                withPagination
            />
        </AuthenticatedLayout>
    )
}
