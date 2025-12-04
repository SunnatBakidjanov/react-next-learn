/* --- Imports --- */
import Link from 'next/link';
import { MaxWidthContainer } from '../containers/max-width-container/MaxWidthContainer';
import { cn } from '@/utils/cn';
import { SiteNavigation } from '../navs/site-navigation/SiteNavigation';
import { headerConfig } from './header-config/header.config';

/* --- Header Component --- */
export const Header = () => {
	const { title, navData } = headerConfig;

	return (
		<header className="py-2.5 sm:py-3 lg:py-4 border-b border-(--primary-color)">
			<MaxWidthContainer>
				<div className="flex items-center justify-between">
					<Link
						href={'/'}
						className={cn(
							'font-bold whitespace-nowrap',
							'text-xl sm:text-2xl lg:text-3xl',
							'hover:text-(--accent-color) focus-visible:text-(--accent-color)'
						)}
					>
						{title}
					</Link>

					<SiteNavigation data={navData} classNames={{ link: 'text-base sm:text-lg lg:text-xl' }} />
				</div>
			</MaxWidthContainer>
		</header>
	);
};
