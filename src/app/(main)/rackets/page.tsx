/* --- Imports --- */
import { RacketGetting } from '@/UI-pages/racket-select-page/UI/racket-getting/RacketGetting';
import { MaxWidthContainer } from '@/componentns/UI/containers/max-width-container/MaxWidthContainer';
import { RacketSelect } from '@/UI-pages/racket-select-page/UI/racket-select/RacketSelect';
import { pageConfig } from '@/UI-pages/racket-select-page/page-config/page.config';

/* --- RacketSelectPage --- */
const RacketSelectPage = () => {
	const { title, description } = pageConfig;

	return (
		<div className="mt-6 md:mt-8 lg:mt-10">
			<section>
				<MaxWidthContainer>
					<RacketGetting title={title} description={description} />
				</MaxWidthContainer>
			</section>

			<section>
				<MaxWidthContainer className="px-4">
					<RacketSelect />
				</MaxWidthContainer>
			</section>
		</div>
	);
};

/* --- Exports --- */
export default RacketSelectPage;
