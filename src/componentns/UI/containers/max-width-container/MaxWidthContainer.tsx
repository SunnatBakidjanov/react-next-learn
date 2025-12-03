/* --- Imports --- */
import { cn } from '@/utils/cn';

/* --- Types --- */
type Props = {
	children: React.ReactNode;
	className?: string;
	width?: number;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

/* --- MaxWidthContainer Component --- */
export const MaxWidthContainer = ({ children, className, width = 1280, ...rest }: Props) => {
	return (
		<div style={{ maxWidth: `${width}px` }} className={cn('mx-auto px-2 sm:px-4', className)} {...rest}>
			{children}
		</div>
	);
};
