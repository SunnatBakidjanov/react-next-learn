/* --- Imports --- */
import { MainLayout as MainComponent } from '@/componentns/layouts/main-layout/MainLayout';

/* --- MainLayout Component --- */
const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return <MainComponent>{children}</MainComponent>;
};

/* --- Exports --- */
export default MainLayout;
