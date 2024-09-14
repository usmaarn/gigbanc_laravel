import {AmbassadorStatus} from "@/lib/enum";

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        isCompany: boolean;
    };
};


export type User = {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    referralCode: string;
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
    id: number;
    name: string;
    emailAddress: string;
    category: string;
    organization: string;
    status: string;
    createdAt: string;
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
    mode: string;
    description: string;
    website: string;
    createdAt: string;
}


export type Ambassador = User & {
    id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    username: string;
    referralCode: string;
    phoneNumber: string;
    subscribers: {
        total: number;
        verified: number;
        processing: number;
    };
    earnings: number;
    createdAt: string;
    emailVerifiedAt: string;
}
