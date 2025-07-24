import Card from '../components/Card';
import basketballImage from '../assets/images/basketball.jpg';
import footballImage from '../assets/images/football.jpg';
import tennisImage from '../assets/images/tennis.jpg';

function SportsPage() {
	const sportsData = [
		{
			image: footballImage,
			title: 'Football (Soccer)',
			desc: 'The most popular sport globally, with billions of fans. Played by two teams of eleven players with a spherical ball.',
		},
		{
			image: basketballImage,
			title: 'Basketball',
			desc: 'A fast-paced team sport where two teams try to score by shooting a ball through the opposing hoop.',
		},
		{
			image: tennisImage,
			title: 'Tennis',
			desc: 'A sport played individually or in pairs, using rackets to hit a ball over a net.',
		},
	];

	return (
		<div className="p-4 sm:p-6 md:p-8">
			<h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
				Most Popular Sports
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{sportsData.map((sport) => (
					<Card
						key={sport.title}
						imageUrl={sport.image}
						title={sport.title}
						description={sport.desc}
					/>
				))}
			</div>
		</div>
	);
}

export default SportsPage;
