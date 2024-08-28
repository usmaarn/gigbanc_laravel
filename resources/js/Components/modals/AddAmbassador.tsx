import {ChangeEvent, FormEvent, MutableRefObject, useRef} from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/Components/ui/dialog";
import {Button} from "@/Components/ui/button";
import {Icon} from "@iconify/react";
import {FormButton, FormInput} from "@/Components/form";
import {useForm} from "@inertiajs/react";

export default function AddAmbassador() {
    const closeRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);
    //@ts-ignore
    const {data, errors, processing, setData, post} = useForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    });

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        post(route("company.ambassadors"), {

        })
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setData(name, value);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Icon icon="pepicons-pop:plus" className="mr-2 text-xl" />
                    <span>Add Record</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>New Ambassador</DialogTitle>
                        <DialogDescription>Add new ambassador</DialogDescription>
                    </DialogHeader>

                    <div className="py-5 space-y-3">
                        <FormInput error={errors?.firstName} label="First Name" value={data?.firstName} name="firstName" onChange={handleChange}/>
                        <FormInput error={errors?.lastName} label="Last Name" name="lastName" value={data?.lastName} onChange={handleChange}/>
                        <FormInput error={errors?.email} label="Email Address" name="email" type="email" value={data?.email} onChange={handleChange}/>
                        <FormInput error={errors?.phone} label="Phone Number" name="phone" type="tel" value={data?.phone} onChange={handleChange}/>
                        <FormInput type="password" error={errors?.password} label="Password"  value={data?.password} name="password" onChange={handleChange}/>
                    </div>

                    <DialogFooter className="space-x-3">
                        <DialogClose asChild ref={closeRef}>
                            <Button type="button" size="lg" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                        <FormButton loading={processing} className="w-auto" type="submit">
                            Add Ambassador
                        </FormButton>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
