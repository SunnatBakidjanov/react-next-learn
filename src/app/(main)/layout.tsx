/* --- Imports --- */
import { Header } from '@/componentns/UI/header/Header';

/* --- MainLayout Component --- */
const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-w-[320px]">
			<Header />
			<main>{children}</main>
		</div>
	);
};

/* --- Exports --- */
export default MainLayout;
