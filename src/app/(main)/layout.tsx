/* --- Imports --- */
import { MainLayout as Layout } from '@/componentns/layouts/main-layout/MainLayout';

/* --- MainLayout Component --- */
const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return <Layout>{children}</Layout>;
};

/* --- Exports --- */
export default MainLayout;
