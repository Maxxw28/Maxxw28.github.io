import { createContext, useContext } from 'react';

// 1. Create the context with a default value.
// It's a good practice to define the shape of the context.
export const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

// 2. Create and export a custom hook to consume the context.
// This hook provides a safety check to ensure it's used within a provider.
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
