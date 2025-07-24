function Card({ imageUrl, title, description, children }) {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
			{imageUrl && (
				<img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
			)}
			<div className="p-6">
				<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
					{title}
				</h3>
				<p className="text-gray-700 dark:text-gray-300">{description}</p>
				{/* 'children' allows passing more complex content into the card */}
				{children}
			</div>
		</div>
	);
}

export default Card;
