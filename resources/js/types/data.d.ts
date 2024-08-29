import {AmbassadorStatus} from "@/lib/enum";

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone?: string;
    roles?: string[];
    created_at?: string;
    subscribers: {
        count: number;
        verified: number;
        unverified: number;
    }
    emailVerifiedAt?: Date;
    phoneVerifiedAt?: Date;
};

export type ApiError = { [name: string]: string } | null;

export type Platform = {
    id: string;
    name: string;
    description: string;
    image: string;
}

export type Category = Platform & {
    type: string;
}

export type Subscriber = {
    id: string;
    name: string;
    email: string;
    type: "individual"|"company";
    platform: Platform;
    category?: Category;
    status: string;
    ambassador: Ambassador;
    organization: Company;
};


export type Company = {
    id: number;
    name: string;
    username: string;
    emailAddress: string;
    subscribers: number;
    ambassadors: number;
    address: string;
    logo: string;
    description: string;
    website: string;
    createdAt: string;
}


export type Ambassador = User & {
    status: AmbassadorStatus;
}
