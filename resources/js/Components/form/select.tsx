import {Label} from "@/Components/ui/label";
import {Select, SelectContent, SelectTrigger, SelectValue} from "@/Components/ui/select";
import {SelectProps} from "@radix-ui/react-select";


export default function Slt({children, label, error, ...props}: SelectProps & {
    label: string; error?: string
}) {
    return (
        <div className="">
            <Label>{label}</Label>
            <Select {...props}>
                <SelectTrigger className="">
                    <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent>{children}</SelectContent>
            </Select>
            {error && (
                <p className="text-sm mt-1 capitalize font-semibold text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}
