/* --- Imports --- */
import '@styles/globals.css';

/* --- RootLayout --- */
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	);
};

/* --- Exports --- */
export default RootLayout;
