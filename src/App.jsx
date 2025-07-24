import { useState } from 'react';
import './App.css';
import basketballImage from './assets/images/basketball.jpg';
import footballImage from './assets/images/football.jpg';
import tennisImage from './assets/images/tennis.jpg';
import messiImage from './assets/images/messi.jpg';
import lebronImage from './assets/images/lebron.jpg';
import serenaImage from './assets/images/serena.jpg';

function App() {
	const [sports, setSports] = useState(true);
	return (
		<>
			<header>
				<h1>Most Popular Sports</h1>
				<nav>
					<a onClick={() => setSports(true)}>Sports</a>
					<a onClick={() => setSports(false)}>Athletes</a>
				</nav>
			</header>

			{sports ? (
				<main>
					<section class="sport">
						<img src={footballImage} alt="Football" />
						<h2>Football (Soccer)</h2>
						<p>
							The most popular sport globally, with billions of fans. Played by
							two teams of eleven players with a spherical ball.
						</p>
					</section>
					<section class="sport">
						<img src={basketballImage} alt="Basketball" />
						<h2>Basketball</h2>
						<p>
							A fast-paced team sport where two teams try to score by shooting a
							ball through the opposing hoop.
						</p>
					</section>
					<section class="sport">
						<img src={tennisImage} alt="Tennis" />
						<h2>Tennis</h2>
						<p>
							A sport played individually or in pairs, using rackets to hit a
							ball over a net.
						</p>
					</section>
				</main>
			) : (
				<main>
					<section class="athlete">
						<img src={messiImage} alt="Lionel Messi" />
						<h2>Lionel Messi</h2>
						<p>
							Legendary footballer known for his incredible skills, vision, and
							numerous Ballon d'Or awards.
						</p>
					</section>
					<section class="athlete">
						<img src={lebronImage} alt="LeBron James" />
						<h2>LeBron James</h2>
						<p>
							One of the greatest basketball players of all time with multiple
							NBA championships and MVP awards.
						</p>
					</section>
					<section class="athlete">
						<img src={serenaImage} alt="Serena Williams" />
						<h2>Serena Williams</h2>
						<p>
							Dominant tennis player with numerous Grand Slam titles and a
							powerful presence on the court.
						</p>
					</section>
				</main>
			)}

			<footer>
				<p>&copy; 2025 Sports World</p>
			</footer>
		</>
	);
}

export default App;
