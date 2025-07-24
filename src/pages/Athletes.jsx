import messiImage from '../assets/images/messi.jpg';
import lebronImage from '../assets/images/lebron.jpg';
import serenaImage from '../assets/images/serena.jpg';

function Athletes() {
	return (
		<main>
			<section className="athlete">
				<img src={messiImage} alt="Lionel Messi" />
				<h2>Lionel Messi</h2>
				<p>
					Legendary footballer known for his incredible skills, vision, and
					numerous Ballon d'Or awards.
				</p>
			</section>
			<section className="athlete">
				<img src={lebronImage} alt="LeBron James" />
				<h2>LeBron James</h2>
				<p>
					One of the greatest basketball players of all time with multiple NBA
					championships and MVP awards.
				</p>
			</section>
			<section className="athlete">
				<img src={serenaImage} alt="Serena Williams" />
				<h2>Serena Williams</h2>
				<p>
					Dominant tennis player with numerous Grand Slam titles and a powerful
					presence on the court.
				</p>
			</section>
		</main>
	);
}

export default Athletes;
