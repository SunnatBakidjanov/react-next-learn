/* --- Imports --- */
import { RootLayout as Layout } from '@/componentns/layouts/root-layout/RootLayout';
import '@styles/globals.css';

/* --- RootLayout --- */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return <Layout>{children}</Layout>;
};

/* --- Exports --- */
export default RootLayout;
