import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const uppercaseFirstLetter = (str: string) =>
  `${str.substring(0, 1).toUpperCase()}${str.substring(1)}`;