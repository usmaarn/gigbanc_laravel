/** @format */
"use client";

import {Label} from "../ui/label";
import {Textarea, TextareaProps} from "@/components/ui/textarea";

export default function TextField({
  children,
  label,
  id,
    className,
  error,
  name,
  ...props
}: TextareaProps & { label: string; error?: string }) {
  return (
    <div className={className}>
      <Label htmlFor={id ?? name}>{label}</Label>
      <Textarea
        id={id ?? name}
        name={name}
        {...props}
        className={`
            ${error && "border-red-500 focus-visible:ring-red-500 text-red-500"}
            
        `}
      />
      {error && (
        <p className="text-sm mt-1 capitalize font-semibold text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
