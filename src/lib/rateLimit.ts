
const attempts = new Map();

export interface RateLimitConfig {
    windowMs: number;
    maxAttempts: number;
}

export const rateLimiter = (
    identifier: string,
    config: RateLimitConfig = { windowMs: 60000, maxAttempts: 5 }
): { success: boolean, remaining: number } => {

    const now = Date.now();
    const key = identifier;

    if (!attempts.has(key)) {
        attempts.set(key, { count: 1, resetTime: now + config.windowMs });
        return { success: true, remaining: config.maxAttempts - 1 };
    }

    const record = attempts.get(key);

    if (now > record.resetTime) {
        attempts.set(key, { count: 1, resetTime: now + config.windowMs });
        return { success: true, remaining: config.maxAttempts - 1 }
    }

    if (record.count >= config.maxAttempts) {
        return { success: false, remaining: 0 };
    }

    record.count++;
    attempts.set(key, record);

    return { success: true, remaining: config.maxAttempts - record.count };
};

setInterval(() => {
    const now = Date.now();
    for (const [key, record] of attempts.entries()) {
        if (now > record.resetTime) {
            attempts.delete(key);
        }
    }
}, 5 * 60 * 100);