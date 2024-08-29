import {PageProps, Subscriber} from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SubscribersTable from "@/Components/Tables/SubscribersTable";


export default function Page({subscribers}: PageProps<{
    subscribers: Subscriber[];
}>){


    return (
        <AuthenticatedLayout>
            <SubscribersTable
                subscribers={subscribers}
                title="Subscribers"
                withPagination
                searchable
            />
        </AuthenticatedLayout>
    )
}
