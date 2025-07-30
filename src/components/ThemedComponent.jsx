import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useFetch } from '../hooks/useFetch';

export const ThemedComponent = () => {
	const { theme, toggleTheme } = useTheme();
	const { data, loading, error } = useFetch(
		'https://jsonplaceholder.typicode.com/posts/1'
	);

	const style = {
		backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
		color: theme === 'light' ? '#222' : '#f0f0f0',
		minHeight: '100vh',
		padding: '2rem',
		textAlign: 'center',
		transition: 'all 0.5s ease',
	};

	return (
		<div style={style}>
			<h1>Welcome to the Demo App!</h1>
			<p>
				The current theme is: <strong>{theme}</strong>
			</p>
			<button onClick={toggleTheme}>Toggle Theme</button>

			<div style={{ marginTop: '2rem' }}>
				<h2>Fetched Data:</h2>
				{loading && <p>Loading...</p>}
				{error && <p>Error: {error.message}</p>}
				{data && (
					<article
						style={{
							border: `1px solid ${theme === 'light' ? '#ddd' : '#555'}`,
							padding: '1rem',
							borderRadius: '8px',
							marginTop: '1rem',
						}}
					>
						<h3>{data.title}</h3>
						<p>{data.body}</p>
					</article>
				)}
			</div>
		</div>
	);
};
