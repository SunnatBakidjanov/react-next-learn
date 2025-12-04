/* --- Imports --- */
import { RootLayout as RootComponent } from '@/componentns/layouts/root-layout/RootLayout';
import '@styles/globals.css';

/* --- RootLayout --- */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return <RootComponent>{children}</RootComponent>;
};

/* --- Exports --- */
export default RootLayout;
