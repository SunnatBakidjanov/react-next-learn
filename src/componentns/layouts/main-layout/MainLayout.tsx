/* --- Imports --- */
import { Footer } from '@/componentns/UI/footer/Footer';
import { Header } from '@/componentns/UI/header/Header';

/* --- MainLayout Component --- */
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-w-[320px]">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};
