import {useState} from "react";
import {Button} from "@/Components/ui/button";
import {CheckCheckIcon, CopyIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/Components/ui/tooltip";
import {toast} from "sonner";


export default function CopyToClipboard({text, title, ...props}: {
    text: string,
    title?: string,
    disabled?: boolean,
})
{
    const [copied, setCopied] = useState(false);

    function copy() {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000)
        toast(title ? `${title} has been copied` : "Copied to clipboard")
    }

    return(
       <TooltipProvider>
           <Tooltip>
               <TooltipTrigger>
                   <Button
                       disabled={copied || props.disabled}
                       className="cursor-not-allowed"
                       onClick={copy}
                       size="icon"
                       variant="outline"

                   >
                       {copied ? <CheckCheckIcon /> : <CopyIcon/>}
                   </Button>
               </TooltipTrigger>
               <TooltipContent>Copy {title}</TooltipContent>
           </Tooltip>
       </TooltipProvider>
    )
}
