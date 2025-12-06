import { RacketType } from '@/types/types';

export const specsNav = (racket: RacketType) => {
	return [
		{ name: 'Модель', value: racket?.model },
		{ name: 'Год выпуска', value: racket?.year },
		{ name: 'Тип', value: racket?.type },
		{ name: 'Цена', value: racket?.price },
		{ name: 'Бренд', value: racket?.brand?.name },
	];
};

export const pageConfig = {
	basketBtn: 'В корзину',
	specsNav,
};
