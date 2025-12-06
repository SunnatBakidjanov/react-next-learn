/* --- Imports --- */
import { Line } from '@/componentns/UI/line/Line';
import { Title } from '@/componentns/UI/title/Title';

/* --- Types --- */
type Props = {
	title: string;
	description: string;
};

/* --- RacketGetting Component --- */
export const RacketGetting = ({ title, description }: Props) => {
	return (
		<div className="flex flex-col items-center gap-0.5 sm:gap-1 lg:gap-2">
			<Title className="text-3xl sm:text-4xl" text={title} />

			<p className="font-bold text-(--primary-color) text-xl sm:text-2xl">{description}</p>

			<Line className="mt-2" />
		</div>
	);
};
