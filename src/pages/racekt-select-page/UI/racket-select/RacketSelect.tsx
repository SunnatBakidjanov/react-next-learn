'use client';

/* --- Imports --- */
import { RacketCard } from '../racket-card/RacketCard';
import { rackets } from '@/mock/mock';

/* --- RacketSelect Component --- */
export const RacketSelect = () => {
	return (
		<div className="flex justify-center flex-wrap gap-4 mt-6 sm:mt-8 lg:mt-10">
			{rackets.map(r => {
				return <RacketCard key={r.id} racket={r} />;
			})}
		</div>
	);
};
