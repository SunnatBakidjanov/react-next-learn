/* --- Imports --- */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* --- cn Utility Function --- */
// Эта функция удаляет значения null, undefined, false и пустые строки. Она объединяет классы и приводит к объединению классов Tailwind.
export function cn(...classes: (string | undefined | null | false)[]) {
	return twMerge(clsx(classes));
}
