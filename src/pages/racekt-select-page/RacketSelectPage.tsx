import { MaxWidthContainer } from '@/componentns/UI/containers/max-width-container/MaxWidthContainer';
import { pageConfig } from './page-config/page-config';
import { RacketGetting } from './UI/racket-getting/RacketGetting';
import { RacketSelect } from './UI/racket-select/RacketSelect';

export const RacketSelectPage = () => {
	const { title, description } = pageConfig;

	return (
		<div className="mt-10">
			<section>
				<MaxWidthContainer>
					<RacketGetting title={title} description={description} />
				</MaxWidthContainer>
			</section>

			<section>
				<MaxWidthContainer>
					<RacketSelect />
				</MaxWidthContainer>
			</section>
		</div>
	);
};
