import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function route(link: string, biz?: any){
    return (biz ? "/"+biz : "") + link;
}

export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
