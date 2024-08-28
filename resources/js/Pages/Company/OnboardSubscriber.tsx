import {Link, useForm} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {FormButton, FormInput, FormSelect} from "@/Components/form";
import Guest from "@/Layouts/GuestLayout";
import {Ambassador, Category, Company} from "@/types/data";
import {ChangeEvent, FormEvent} from "react";
import {SelectItem} from "@/Components/ui/select";


export default function Register({company, ambassador, categories}: {
    company: Company;
    ambassador: Ambassador;
    categories: Category[];
}) {

    const {data, setData, post, processing, errors} = useForm({
        name: "",
        email: "",
        phone: "",
        type: "",
        category_id: "",
        company_id: company?.id,
        user_id: ambassador?.id,
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post(route("company.onboard.store", company.username))
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setData(name, value);
    }

    return (
        <Guest name={company.name}>
            <section className="w-full max-w-[400px] mx-auto">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Get Onboarded</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-5">
                            <div className="py-5 space-y-3">
                                <FormInput error={errors?.name} label="Name" value={data?.name} name="name"
                                           onChange={handleChange}/>
                                <FormInput error={errors?.email} label="Email Address" name="email" type="email"
                                           value={data?.email} onChange={handleChange}/>
                                <FormInput error={errors?.phone} label="Phone Number" name="phone" type="tel"
                                           value={data?.phone} onChange={handleChange}/>
                                <FormSelect label="Subscriber Type" value={data?.type} error={errors?.type}
                                            onValueChange={(value) => setData("type", value)}>
                                    {/*<SelectItem value="individual">Individual</SelectItem>*/}
                                    <SelectItem value="organization">Organization</SelectItem>
                                </FormSelect>
                                {data.type == "organization" && (
                                    <FormSelect label="Subscriber Category" error={errors?.category_id}
                                                value={data?.category_id}
                                                onValueChange={(value) => setData("category_id", value)}>
                                        {categories.map(cat => (
                                            <SelectItem key={cat.id} value={cat.id.toString()}>{cat.name}</SelectItem>
                                        ))}
                                    </FormSelect>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="space-x-5">
                            <FormButton type="submit" size="default" className="w-auto">Register</FormButton>
                        </CardFooter>
                    </Card>
                </form>
            </section>
        </Guest>
    );
}
