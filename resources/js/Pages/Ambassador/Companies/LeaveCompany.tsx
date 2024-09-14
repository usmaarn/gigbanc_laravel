import {Company} from "@/types";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/Components/ui/alert-dialog";
import {useForm} from "@inertiajs/react";
import {toast} from "sonner";
import {useState} from "react";
import {Loader, Loader2} from "lucide-react";

export default function LeaveCompany({company}: {company: Company}){

    const {delete: destroy, processing} = useForm();
    const [hide, setHide] = useState(true);

    function leaveCompany(){
        setHide(true)
        destroy(route("ambassador.companies.leave", company.id), {
            onSuccess: () => {
                toast.success("Successfully left company")
                setTimeout(() => location.reload(), 2000)
            },
            onError: () => toast.error("An error occurred"),
        });
    }

    return(
        <AlertDialog>
            <AlertDialogTrigger>
                {processing ? <Loader2 className="animate-spin" /> : "Leave"}
            </AlertDialogTrigger>
            <AlertDialogContent hidden={hide}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you want to leave {company.name}?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your record on
                        {company.name} and you cannot retrieve it.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={leaveCompany}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
