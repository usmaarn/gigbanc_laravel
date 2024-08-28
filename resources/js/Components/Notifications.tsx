
import {Icon} from "@iconify/react";
import {Fragment} from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/Components/ui/dropdown-menu";
import {Button} from "@/Components/ui/button";
import {ScrollArea} from "@/Components/ui/scroll-area";
import {Link} from "@inertiajs/react";
import {Separator} from "@/Components/ui/separator";

export default function Notifications() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="size-9 rounded-full">
                    <Icon icon="ph:bell-fill" className="text-2xl text-gray-500" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent aria-label="notification dropdown" className="max-w-xs">
                <ScrollArea className="max-h-[400px]">
                    {[1].map(item => (
                        <Fragment key={item}>
                            <DropdownMenuItem className="cursor-pointer p-2">
                                <div className="relative">
                                    <Link href="#" className="block">
                                        <h3 className="font-semibold text-sm">Welcome To Growthacy</h3>
                                        <p className="line-clamp-2 text-xs">
                                            We welcome you to Growthacy, and you can now access your account
                                        </p>
                                    </Link>
                                    <Button
                                        onClick={() => alert("reda")}
                                        className="h-7 text-xs float-right"
                                        variant="outline"
                                    >
                                        Mark as Read
                                    </Button>
                                </div>
                            </DropdownMenuItem>
                            <Separator />
                        </Fragment>
                    ))}
                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
