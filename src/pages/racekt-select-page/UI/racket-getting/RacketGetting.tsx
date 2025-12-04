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
		<div className="flex flex-col items-center gap-2">
			<Title className="text-4xl" text={title} />

			<p className="font-bold text-(--primary-color) text-2xl">{description}</p>

			<Line className="mt-2" />
		</div>
	);
};
