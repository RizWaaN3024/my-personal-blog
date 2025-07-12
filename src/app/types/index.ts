export interface ISubscriber {
    _id?: string;
    email: string;
    subscribedAt?: Date;
    isActive: boolean;
    unsubscribeToken: string;
    isVerified: boolean;
    verificationToken?: string;
    preferences?: {
        frequency: 'immediate' | 'daily' | 'weekly'
    };
    stats?: {
        emailsSent: number;
        lastEmailSent?: Date;
    };
    createdAt?: Date;
    updatedAt?: Date;
}