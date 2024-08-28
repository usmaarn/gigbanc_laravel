import {MutableRefObject, useEffect, useRef} from "react";
import {toast} from "sonner";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/Components/ui/dialog";
import {Button} from "@/Components/ui/button";
import {Icon} from "@iconify/react";
import {FormButton, FormInput} from "@/Components/form";
import {useForm} from "@inertiajs/react";
import {Ambassador} from "@/types/data";

export default function EditAmbassador({ambassador}: {ambassador?: Ambassador|null}) {
    const closeRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
    //@ts-ignore
    const {data, errors, success, action} = useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    });

    return (
        <Dialog>
            <DialogTrigger className="text-sm font-semibold text-blue-600">
                Edit
            </DialogTrigger>
            <DialogContent>
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Update Ambassador</DialogTitle>
                        <DialogDescription>update ambassador</DialogDescription>
                    </DialogHeader>

                    <div className="py-5 space-y-3">
                        <FormInput label="First Name" name="firstName" error={errors?.firstName} required/>
                        <FormInput label="Last Name" name="lastName" error={errors?.lastName} required/>
                        <FormInput label="Email Address" name="email" type="email" error={errors?.email} required/>
                        <FormInput label="Phone Number" name="phone" type="tel" error={errors?.phone} required/>
                        <FormInput label="Password" name="password" type="password" error={errors?.password} required/>
                    </div>

                    <DialogFooter className="space-x-3">
                        <DialogClose asChild ref={closeRef}>
                            <Button type="button" size="lg" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                        <FormButton className="w-auto" type="submit">
                            Update
                        </FormButton>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
