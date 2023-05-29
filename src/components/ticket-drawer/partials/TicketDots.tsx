export const TicketDots = () => {
	const dotCount = 9;

	// Create an array of dot indices
	const dots = Array.from({ length: dotCount }, (_, index) => index);

	return (
		<div className="drawer__ticket__dots">
			{dots.map((dotIndex) => (
				<span key={dotIndex}></span>
			))}
		</div>
	);
};
