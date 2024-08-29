import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {useMemo} from "react";
import {ColumnDef} from "@tanstack/react-table";
import {Ambassador, PageProps} from "@/types";
import DataTable from "@/Components/DataTable";

export default function Page({ambassadors}: PageProps<{
    ambassadors: Ambassador[];
}>){
    const memoData = useMemo(() => ambassadors, []);

    const columns: ColumnDef<Ambassador>[] = [
        {
            header: "Id",
            accessorKey: "id",
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
        },
        {
            header: "Total Earnings",
            accessorFn: cell => `N${(cell.subscribers.verified * 5000).toLocaleString()}`,
        }
    ]

    return(
        <AuthenticatedLayout>
            <DataTable
                data={ambassadors}
                columns={columns}
                title="Top Ambassadors"
                searchable
            />
        </AuthenticatedLayout>
    )
}
