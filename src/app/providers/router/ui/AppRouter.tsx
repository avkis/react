import { AboutPage } from 'pages/AboutPage/ui';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

function AppRouter() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={<div className='page-content'>{element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	);
}

export default AppRouter;