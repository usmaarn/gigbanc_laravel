/** @format */

"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";

export default function Cb({
  id,
  name,
  error,
  label,
  ...props
}: CheckboxProps & {
  label?: string;
  error?: string;
}) {
  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <Checkbox id={id ?? name} name={name} {...props} />
        <label
          htmlFor={id ?? name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
      {error && <p className="text-sm text-red-600 font-semibold">{error}</p>}
    </div>
  );
}
