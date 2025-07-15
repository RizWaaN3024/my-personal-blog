import crypto from "crypto";
import mongoose, { Schema } from "mongoose";
import { ISubscriber } from "../types";

interface SubscriberDocument extends ISubscriber, Document {
    generateUnsubscribeToken(): string;
    generateVerificationToken(): string;
}

const subscriberSchema = new Schema<SubscriberDocument>({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    unsubscribeToken: {
        type: String,
        required: true,
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        unique: true,
        sparse: true
    },
    preferences: {
        frequency: {
            type: String,
            enum: ['immediate', 'daily', 'weekly'],
            default: 'immediate'
        }
    },
    stats: {
        emailsSent: {
            type: Number,
            default: 0
        },
        lastEmailSent: {
            type: Date
        }
    }
}, {
    timestamps: true
})

// Indexes
subscriberSchema.index({ isActive: 1 });

// Static Methods
// method to get total active subscribers
subscriberSchema.statics.getActiveCount = function(): Promise<number> {
    return this.countDocuments({ isActive: true });
}

// Instance Methods
subscriberSchema.methods.generateUnsubscribeToken = function(): string {
    this.unsubscribeToken = crypto.randomBytes(32).toString('hex');
    return this.unsubscribeToken;
}

subscriberSchema.methods.generateVerificationToken = function(): string {
    this.verificationToken = crypto.randomBytes(32).toString('hex');
    return this.verificationToken;
}

const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', subscriberSchema);

export default Subscriber;