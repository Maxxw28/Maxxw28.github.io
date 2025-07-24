import { NavLink, Outlet } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

// 1. Import the custom hook from its dedicated file. This is the only thing we need!
import { useTheme } from '../hooks/useTheme';

function Layout() {
	// 2. Call the hook to get the theme state and the toggle function. It's that simple!
	const { theme, toggleTheme } = useTheme();

	// Style for the active NavLink to make it stand out.
	const activeLinkStyle = {
		textDecoration: 'underline',
		color: '#3b82f6', // Tailwind's blue-500 color
	};

	return (
		// 3. The root div no longer needs the theme class!
		// Our improved ThemeProvider now applies the 'dark' class to the <html> tag,
		// which is the standard and more robust way to use Tailwind's dark mode.
		<div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
			<header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
						<NavLink to="/">Sports World</NavLink>
					</h1>
					<nav className="flex items-center space-x-4 md:space-x-6 text-lg">
						<NavLink
							to="/"
							style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
						>
							Sports
						</NavLink>
						<NavLink
							to="/athletes"
							style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
						>
							Athletes
						</NavLink>
						<NavLink
							to="/pups"
							style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
						>
							Pups
						</NavLink>

						{/* The Theme Toggle Button uses the values from our hook */}
						<button
							onClick={toggleTheme}
							className="p-2 rounded-full text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							aria-label="Toggle theme"
						>
							{theme === 'light' ? (
								<MoonIcon className="h-6 w-6" />
							) : (
								<SunIcon className="h-6 w-6" />
							)}
						</button>
					</nav>
				</div>
			</header>

			<main className="container mx-auto p-4">
				<Outlet />
			</main>

			<footer className="bg-white dark:bg-gray-800 mt-8 py-4 text-center">
				<p>© 2025 Sports World</p>
			</footer>
		</div>
	);
}

export default Layout;
