import { useState, useContext, createContext } from 'react';
import './App.css';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () =>
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

	const value = { theme, toggleTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

const ThemeToggleButton = () => {
	const { toggleTheme, theme } = useTheme();
	return (
		<button
			onClick={toggleTheme}
			style={{
				padding: '10px',
				marginTop: '20px',
				backgroundColor: theme === 'light' ? '#999' : '#f9f9f9',
				color: theme === 'light' ? '#f9f9f9' : '#999',
				cursor: 'pointer',
				transition: 'all 0.5s ease',
			}}
		>
			Toggle Theme
		</button>
	);
};

const ThemedBox = () => {
	const { theme } = useTheme();
	const styles = {
		light: {
			backgroundColor: '#f9f9f9',
			color: '#222',
		},
		dark: {
			backgroundColor: '#222',
			color: '#f9f9f9',
		},
	};

	return (
		<div
			style={{
				...styles[theme],
				padding: '20px',
				borderRadius: '8px',
				transition: 'all 0.5s ease',
			}}
		>
			<h2>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h2>
			<p>This box changes its theme using Context and a custom hook</p>
		</div>
	);
};

export default function App() {
	return (
		<ThemeProvider>
			<div style={{ textAlign: 'center', marginTop: '50px' }}>
				<h1>Really Simple example of Theme Context and custom Hook</h1>
				<br />
				<ThemedBox />
				<ThemeToggleButton />
			</div>
		</ThemeProvider>
	);
}

// import { ThemeProvider } from './components/ThemeProvider';
// import { ThemedComponent } from './components/ThemedComponent';
// import './App.css'

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemedComponent />
//     </ThemeProvider>
//   );
// }

// export default App;
