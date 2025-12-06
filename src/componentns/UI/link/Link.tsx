'use client';

/* --- Imports --- */
import { usePathname } from 'next/navigation';
import Link, { type LinkProps } from 'next/link';
import { cn } from '@/utils/cn';

/* --- Types --- */
type Props = {
	className?: string;
	children?: React.ReactNode;
	href: LinkProps['href'];
} & Omit<LinkProps, 'className' | 'children' | 'href'>;

/* --- LinkComponent --- */
export const LinkComponent = ({ className, children, href, ...rest }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={cn(
				'font-bold relative flex items-center justify-center',
				'transition-colors duration-200 ease-out',
				'hover:text-(--accent-color) focus-visible:text-(--accent-color)',
				className
			)}
			{...rest}
		>
			{children}

			{isActive && (
				<span
					className={cn(
						'bg-(--primary-color) absolute w-full pointer-events-none h-0.5 bottom-0 ',
						'transition-colors duration-200 ease-out',
						'group-hover:bg-(--accent-color) group-focus-within:bg-(--accent-color)'
					)}
				/>
			)}
		</Link>
	);
};
