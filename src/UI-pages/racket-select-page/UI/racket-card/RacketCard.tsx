/* --- Imports --- */
import { Line } from '@/componentns/UI/line/Line';
import type { RacketType } from '@/types/types';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { pageConfig } from '../../page-config/page.config';
import { racketsUrl } from '@/utils/urls';
import { Title } from '@/componentns/UI/title/Title';
import Link from 'next/link';

/* --- RacketCard Component --- */
export const RacketCard = ({ racket }: { racket: RacketType }) => {
	const { cardBtn } = pageConfig;
	const { id, name, imageUrl, model, year, price, description } = racket;

	return (
		<div
			className={cn(
				'flex flex-col bg-(--bg-accent) rounded-xl shadow-black/60 shadow-md overflow-hidden',
				'w-full sm:w-2xs lg:w-sm',
				'hover:shadow-xl focus-within:shadow-xl',
				'transition-shadow duration-300 ease-out',
				'px-3 py-6 sm:p-4'
			)}
		>
			<div className={cn('flex items-center justify-center w-full', 'mb-4 md:mb-6')}>
				<div className="relative aspect-3/4 h-auto w-40 sm:w-44 lg:w-50">
					<Image src={imageUrl} alt={name} fill className="object-cover" sizes={'(max-width: 768px) 100vw'} loading="eager" />
				</div>
			</div>

			<Line />

			<div className="flex flex-col justify-between flex-1 mt-4 text-center">
				<Title componentType="h3" className="text-lg sm:text-xl font-bold text-(--primary-color">
					{name}
				</Title>

				<p className="text-(--accent-color) mt-1">
					{model} - {year}
				</p>

				<p className={cn('text-(--primary-color) font-semibold', 'mt-4', 'text-2xl')}>${price}</p>

				<p className={cn('text-(--accent-color) text-sm overflow-auto', 'mt-2', 'h-30')}>{description}</p>

				<Link
					href={`${racketsUrl}/${id}`}
					className={cn(
						'inline-block bg-sky-800 text-white py-2 rounded-2xl text-center',
						'transition-colors duration-200',
						'mt-6',
						'py-2',
						'text-sm sm:text-base',
						'hover:bg-sky-600 focus-visible:bg-sky-600'
					)}
				>
					{cardBtn}
				</Link>
			</div>
		</div>
	);
};
