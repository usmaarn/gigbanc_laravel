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
import {FormButton, FormInput, FormSelect} from "@/Components/form";
import {useForm, usePage} from "@inertiajs/react";
import {SelectItem} from "@/Components/ui/select";
import {PageProps} from "@/types";
import {Category, Company} from "@/types/data";
import {toast} from "sonner";

export default function AddSubscriber() {
    const closeRef: MutableRefObject<HTMLButtonElement | null> = useRef(null);

    const {organizations, categories, auth}: PageProps<{
        organizations: Company[];
        categories: Category[];
    }> = usePage().props;

    //@ts-ignore
    const {data, errors, processing, setData, post} = useForm({
        name: "",
        email: "",
        phone: "",
        type: "",
        category_id: "",
        company_id: "",
        user_id: auth?.user?.id
    });

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        post(route("dashboard.subscribers"), {
            onSuccess: () => {
                toast.success("Subscriber added successfully.");
                closeRef.current?.click();
            }
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
                        <DialogTitle>New Subscriber</DialogTitle>
                        <DialogDescription>Add new subscriber</DialogDescription>
                    </DialogHeader>

                    <div className="py-5 space-y-3">
                        <FormInput error={errors?.name} label="Name" value={data?.name} name="name" onChange={handleChange}/>
                        <FormInput error={errors?.email} label="Email Address" name="email" type="email" value={data?.email} onChange={handleChange}/>
                        <FormInput error={errors?.phone} label="Phone Number" name="phone" type="tel" value={data?.phone} onChange={handleChange}/>
                        <FormSelect label="Subscriber Type" value={data?.type} error={errors?.type}
                                    onValueChange={(value) => setData("type", value)}>
                            <SelectItem value="individual">Individual</SelectItem>
                            <SelectItem value="organization">Organization</SelectItem>
                        </FormSelect>
                        {data.type == "organization" && (
                            <FormSelect label="Subscriber Category" error={errors?.category_id}
                                        value={data?.category_id} onValueChange={(value) => setData("category_id", value)}>
                                {categories.map(cat => (
                                    <SelectItem key={cat.id} value={cat.id.toString()}>{cat.name}</SelectItem>
                                ))}
                            </FormSelect>
                        )}
                        <FormSelect label="Company" error={errors?.company_id}
                                    value={data?.company_id} onValueChange={(value) => setData("company_id", value)}>
                            {organizations.map(org => (
                                <SelectItem key={org.id} value={org.id.toString()}>{org.name}</SelectItem>
                            ))}
                        </FormSelect>
                    </div>

                    <DialogFooter className="space-x-3">
                        <DialogClose asChild ref={closeRef}>
                            <Button type="button" size="lg" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                        <FormButton loading={processing} className="w-auto" type="submit">
                            Add Record
                        </FormButton>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
