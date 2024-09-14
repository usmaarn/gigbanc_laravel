import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Ambassador, Company, PageProps} from "@/types";
import {Link} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import DataTable from "@/Components/DataTable";
import {useMemo} from "react";
import {ColumnDef} from "@tanstack/react-table";
import LeaveCompany from "@/Pages/Ambassador/Companies/LeaveCompany";

export default function CompaniesPage({myCompanies}: PageProps<{myCompanies: Company[]}>) {

    const memoData = useMemo(() => myCompanies, []);

    const columns: ColumnDef<Company>[] = [
        {
            header: "Id",
            accessorKey: "id",
        },
        {
            header: "Name",
            accessorKey: 'name'
        },
        {
            header: "Approved Subscribers",
            accessorFn: cell => 0,
        },
        {
            header: "Pending Subscribers",
            accessorFn: cell => 0,
        },
        {
            header: "Earnings",
            accessorFn: cell => `N0`,
        },
        {
            header: "Current Balance",
            accessorFn: cell => 0,
        },
        {
            header: "Action",
            cell: info => <LeaveCompany company={info.row.original} />
        }
    ]

    return(
        <AuthenticatedLayout>
            <section className="">
                <div className="flex items-center justify-end mb-5">
                    <Link href={route("ambassador.companies.explore")}>
                        <Button size="sm">Join Organizations</Button>
                    </Link>
                </div>

                <div className="">
                    <DataTable
                        data={memoData}
                        columns={columns}
                        title="My Organizations"
                    />
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
