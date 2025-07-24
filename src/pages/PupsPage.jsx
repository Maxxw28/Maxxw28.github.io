import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

function PupsPage() {
	const [dogs, setDogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDogs = async () => {
			try {
				setLoading(true);
				// Fetch 6 random dog images
				const promises = Array(6)
					.fill(null)
					.map(() => axios.get('https://dog.ceo/api/breeds/image/random'));

				const responses = await Promise.all(promises);
				const imageUrls = responses.map((res) => res.data.message);
				setDogs(imageUrls);
				setError(null);
			} catch (err) {
				setError('Failed to fetch cute dogs. Please try again later.');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchDogs();
	}, []); // Empty dependency array means this runs once on mount

	if (loading) {
		return (
			<p className="text-center text-gray-500 dark:text-gray-400 text-lg">
				Loading cute pups...
			</p>
		);
	}

	if (error) {
		return <p className="text-center text-red-500 text-lg">{error}</p>;
	}

	return (
		<div className="p-4 sm:p-6 md:p-8">
			<h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
				Random Pups Gallery
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{dogs.map((dogUrl, index) => (
					<Card
						key={index}
						imageUrl={dogUrl}
						title={`Good Pup #${index + 1}`}
						description="This is a randomly generated image of a dog from the Dog CEO API."
					/>
				))}
			</div>
		</div>
	);
}

export default PupsPage;
