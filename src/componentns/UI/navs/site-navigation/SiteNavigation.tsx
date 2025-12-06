/* --- Imports --- */
import { cn } from '@/utils/cn';
import { LinkComponent } from '../../link/Link';

/* --- Types --- */
type DataType = { text: string; href: string };
type ClassNames = 'nav' | 'list' | 'item' | 'link';
type Props = {
	classNames?: { [key in ClassNames]?: string };
	data: DataType[];
};

/* --- SiteNavigation Component --- */
export const SiteNavigation = ({ data, classNames }: Props) => {
	return (
		<nav className={cn(classNames?.nav)}>
			<ul className={cn('flex gap-2 sm:gap-3 lg:gap-4', classNames?.list)}>
				{data.map(({ href, text }, i) => {
					return (
						<li className={cn('flex items-center justify-center group')} key={i}>
							<LinkComponent href={href} className={classNames?.link}>
								{text}
							</LinkComponent>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
