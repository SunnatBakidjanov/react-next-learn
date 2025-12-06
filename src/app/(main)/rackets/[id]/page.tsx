/* --- Imports --- */
import { MaxWidthContainer } from '@/componentns/UI/containers/max-width-container/MaxWidthContainer';
import Image from 'next/image';
import { Title } from '@/componentns/UI/title/Title';
import { ListItem } from '@/UI-pages/racket-page/UI/list-item/ListItem';
import { rackets } from '@/mock/mock';
import { pageConfig } from '@/UI-pages/racket-page/page-config/page.config';
import { cn } from '@/utils/cn';

/* SSG */
export const generateStaticParams = () => {
	const ids = ['5', '10', '15'];

	return ids.map(id => ({ id }));
};

/* --- RocketsPage --- */
const RacketPage = async ({ params }: PageProps<'/rackets/[id]'>) => {
	const { id } = await params;
	const racket = rackets.find(r => r.id === Number(id));
	const { specsNav, basketBtn } = pageConfig;

	if (!racket) return <p className="text-center py-10">Racket not found</p>;

	const { name, imageUrl, price, description } = racket;

	return (
		<MaxWidthContainer>
			<div className="flex flex-col lg:flex-row gap-10 py-10">
				<div className="flex-1 flex flex-col items-center justify-center">
					<div className="relative w-full max-w-md h-[450px] rounded-xl overflow-hidden shadow-lg">
						<Image src={imageUrl} fill alt={name} className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" loading="eager" />
					</div>

					<Title className="text-2xl font-semibold mt-4 text-center">{name}</Title>
				</div>

				<div className="flex-1 space-y-6 text-center">
					<Title componentType="h1" className="text-3xl md:text-4xl font-bold">
						{name}
					</Title>

					<p className="text-gray-600 text-lg">{description}</p>

					<ul className="space-y-3">
						{specsNav(racket).map(({ name, value }) => (
							<ListItem key={name} specs={name} text={String(value)} />
						))}
					</ul>

					<div className="pt-4">
						<p className="text-3xl font-bold text-green-600">${price.toLocaleString()}</p>
					</div>

					<button
						className={cn(
							'bg-sky-800 text-white rounded-2xl text-lg shadow-md cursor-pointer',
							'transition-colors duration-300 ease-out',
							'px-6 py-3',
							'w-2xs md:w-sm',
							'hover:bg-sky-600 focus-visible:bg-sky-600'
						)}
					>
						{basketBtn}
					</button>
				</div>
			</div>
		</MaxWidthContainer>
	);
};

/* --- Exports --- */
export default RacketPage;
