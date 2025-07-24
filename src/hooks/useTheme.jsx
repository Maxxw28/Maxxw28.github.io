import { useContext } from 'react';
// We import the same context "pipe" again.
import { ThemeContext } from '../context/theme';

// This is our custom hook. It's a regular JavaScript function.
export function useTheme() {
	// React's `useContext` hook is what actually reads the value from the context pipe.
	const context = useContext(ThemeContext);

	// This is a critical safety check. If a component that is NOT inside
	// a <ThemeProvider> tries to call `useTheme()`, the `context` will be `null`
	// (the default value we set in `theme.js`), and this error will be thrown.
	// This helps you find bugs immediately.
	if (context === null) {
		throw new Error('useTheme() must be used within a <ThemeProvider>');
	}

	// If the check passes, we return the context value (`{ theme, toggleTheme }`).
	return context;
}