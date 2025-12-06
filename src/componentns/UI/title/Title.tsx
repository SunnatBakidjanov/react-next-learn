/* --- Imports --- */
import { cn } from '@/utils/cn';

/* --- Types --- */
type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props<T extends React.ElementType> = {
	componentType?: T;
	className?: string;
	children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'children' | 'className'>;

/* --- Title Component --- */
export const Title = ({ children, className, componentType, ...rest }: Props<TitleType>) => {
	const Title = componentType || 'h2';

	return (
		<Title className={cn('text-(--primary-color) font-bold', className)} {...rest}>
			{children}
		</Title>
	);
};
