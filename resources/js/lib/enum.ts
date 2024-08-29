
enum UserType {
    Admin = 1,
    Ambassador = 2,
    Organization = 4,
}

export enum Status {
    ACTIVE = 1,
    BANNED,
    SUSPENDED,
    INACTIVE,
}

export enum AmbassadorStatus {
    APPROVED = "APPROVED",
    DECLINED = "DECLINED",
    PENDING = "PENDING",
}

export enum SubscriberStatus {
    VERIFIED = "Verified",
    PROCESSING = "In Progress",
}
