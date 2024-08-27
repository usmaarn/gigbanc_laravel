/** @format */
"use client";

import { Input, InputProps } from "../ui/input";
import { Label } from "../ui/label";

export default function Inpt({
  children,
  label,
  id,
  error,
  name,
 inputClasName,
  ...props
}: InputProps & { label?: string; error?: string, inputClasName?: string }) {
  return (
    <div className={props.className}>
      <Label htmlFor={id ?? name}>{label}</Label>
      <Input
        id={id ?? name}
        name={name}
        {...props}
        className={` ${error && "border-red-500 focus-visible:ring-red-500 text-red-500"} ${inputClasName}`}
      />
      {error && (
        <p className="text-sm mt-1 capitalize font-semibold text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
