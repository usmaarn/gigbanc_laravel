
import { Loader } from "lucide-react";
import {Button, ButtonProps} from "@/Components/ui/button";

export default function Btn({
  children,
  className,
  disabled,
    loading,
  ...props
}: ButtonProps & {loading?: boolean}) {

  return (
    <Button
      className={`w-full ${className}`}
      size="lg"
      {...props}
      disabled={disabled ?? loading}
    >
      {loading ? <Loader className="animate-spin" /> : children}
    </Button>
  );
}
