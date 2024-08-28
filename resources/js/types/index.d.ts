export interface User {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    role: number;
    email: string;
    email_verified_at?: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        isCompany: boolean;
    };
};
