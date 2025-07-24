import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/mainLayout.jsx';
import SportsPage from './pages/Sports.jsx';
import AthletesPage from './pages/Athletes.jsx';
import PupsPage from './pages/PupsPage.jsx';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<SportsPage />} />
				<Route path="athletes" element={<AthletesPage />} />
				<Route path="pups" element={<PupsPage />} />
			</Route>
		</Routes>
	);
}

export default App;
