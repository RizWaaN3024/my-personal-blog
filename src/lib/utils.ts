import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function generateUnsubscribeUrl(token: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/unsubscribe?token=${token}`;
}

export function generateVerificationUrl(token: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/verify?token=${token}`;
}
