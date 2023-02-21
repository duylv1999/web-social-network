import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { privateRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
	return (
		<Router>
			<Routes>
				{privateRoutes.map((route, index) => {
					let Layout = DefaultLayout;
					let Page = route.component;

					if (route.layout === null) {
						Layout = Fragment;
					}

					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
		</Router>
	);
}

export default App;
