/* --- Imports --- */
import { cn } from '@/utils/cn';

/* --- Line Component --- */
export const Line = ({ className }: { className?: string }) => {
	return <div className={cn('w-full h-px bg-(--primary-color)/40', className)}></div>;
};
