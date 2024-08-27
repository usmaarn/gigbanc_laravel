/** @format */

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../ui/button";
import { Loader } from "lucide-react";

export default function Btn({
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`w-full ${className}`}
      size="lg"
      {...props}
      disabled={disabled ?? pending}
    >
      {pending ? <Loader className="animate-spin" /> : children}
    </Button>
  );
}
