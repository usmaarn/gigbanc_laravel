import {FormEvent, MutableRefObject, useEffect, useRef} from "react";
import {useForm} from "@inertiajs/react";
import {toast} from "sonner";
import {
    AlertDialog, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/Components/ui/alert-dialog";
import {FormButton} from "@/Components/form";

export default function DeleteSubscriber({id}: { id:string}) {
    const closeRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);

    const {delete: destroy, processing} = useForm();

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        destroy(route("dashboard.subscribers", id), {
            onSuccess: () => {
                closeRef?.current?.click();
                toast.success("Subscriber deleted successfully.");
            },
            onError: () => toast.error("An error occurred")
        })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-sm font-semibold text-red-600">
                Delete
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this
                        subscriber and remove the data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel ref={closeRef}>Cancel</AlertDialogCancel>
                    <form onSubmit={handleSubmit}>
                        <FormButton
                            type="submit"
                            className="w-full md:w-auto"
                            size="default"
                            loading={processing}
                        >
                            Continue
                        </FormButton>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
