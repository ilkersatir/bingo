import { useState, useEffect } from "react";
import parralaxLayer0 from "assets/images/layout/0.png";
import parralaxLayer1 from "assets/images/layout/1.png";

const parallaxImages = [
	{
		image: parralaxLayer0,
		revert: true,
		speed: 200,
	},
	{
		image: parralaxLayer1,
		revert: false,
		speed: 100,
	},
];

export const Parallax = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			setMousePosition({ x: clientX, y: clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="parallax">
			{parallaxImages.map((images, index) => {
				const { image, revert, speed } = images;
				return (
					<div
						key={index}
						className="parallax-image"
						style={{
							backgroundImage: `url(${image})`,
							transform: `translate(${
								revert ? -mousePosition.x / speed : mousePosition.x / speed
							}px, ${revert ? -mousePosition.y / speed : mousePosition.y / speed}px)`,
						}}
					/>
				);
			})}
		</div>
	);
};

export default Parallax;
