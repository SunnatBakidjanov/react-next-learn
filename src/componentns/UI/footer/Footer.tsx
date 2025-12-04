import { cn } from '@/utils/cn';
import { MaxWidthContainer } from '../containers/max-width-container/MaxWidthContainer';
import { SiteNavigation } from '../navs/site-navigation/SiteNavigation';
import { footerConfig } from './footer-config/footer.config';

export const Footer = () => {
	const { navData, title } = footerConfig;

	return (
		<footer className="w-full bg-(--bg-accent) border-t border-black/40 mt-10">
			<MaxWidthContainer>
				<div className={cn('flex items-center justify-between', 'py-6')}>
					<div className="text-sm text-gray-600 font-medium">
						© {new Date().getFullYear()} {title}
					</div>

					<SiteNavigation data={navData} classNames={{ link: 'text-sm' }} />
				</div>
			</MaxWidthContainer>
		</footer>
	);
};
