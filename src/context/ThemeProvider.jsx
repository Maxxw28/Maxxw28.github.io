import { useState, useEffect } from 'react';
// We import the context "pipe" we created in the other file.
import { ThemeContext } from './theme';

// This is a React component. It's the only thing this file exports.
export function ThemeProvider({ children }) {
	// State to hold the current theme. It reads from localStorage for persistence.
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme || 'light';
	});

	// This effect runs whenever the `theme` state changes.
	useEffect(() => {
		// This is the standard way to apply Tailwind's dark mode.
		// It adds either the 'dark' or 'light' class to the root <html> element.
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);

		// We also save the user's preference in localStorage.
		localStorage.setItem('theme', theme);
	}, [theme]);

	// The function that will be exposed to other components to toggle the theme.
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	// This is the value that will be "provided" down the component tree.
	// It's an object containing the current theme and the function to change it.
	const value = { theme, toggleTheme };

	// Here, we use the Provider part of our context. We pass it the `value`
	// we just created. Any component inside `children` can now access this value.
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}
