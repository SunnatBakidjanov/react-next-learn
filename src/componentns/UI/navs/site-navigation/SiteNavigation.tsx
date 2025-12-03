'use client';

/* --- Imports --- */
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';

/* --- Types --- */
type DataType = { text: string; href: string };
type ClassNames = 'nav' | 'list' | 'item' | 'link';
type Props = {
	classNames?: { [key in ClassNames]?: string };
	data: DataType[];
};

/* --- SiteNavigation Component --- */
export const SiteNavigation = ({ data, classNames }: Props) => {
	const pathname = usePathname();

	return (
		<nav className={cn(classNames?.nav)}>
			<ul className={cn('flex gap-2 sm:gap-3 lg:gap-4', classNames?.list)}>
				{data.map(({ href, text }, i) => {
					const isActive = pathname === href;

					return (
						<li className={cn('flex items-center justify-center relative group')} key={i}>
							<a
								className={cn(
									'font-bold',
									'text-base sm:text-lg lg:text-xl',
									'transition-colors duration-200 ease-out',
									'hover:text-(--accent-color) focus-visible:text-(--accent-color)'
								)}
								href={href}
							>
								{text}
							</a>

							{isActive && (
								<span
									className={cn(
										'bg-(--primary-color) absolute w-full pointer-events-none h-0.5 bottom-0 ',
										'transition-colors duration-200 ease-out',
										'group-hover:bg-(--accent-color) group-focus-within:bg-(--accent-color)'
									)}
								/>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
