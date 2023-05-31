import { CSSProperties } from "react";

type CardProps = {
	handler?: () => void;
	style?: CSSProperties;
	className?: string;
	onBoard?: boolean;
	onMouseEnter?: () => void;
	isMatchingCard?: boolean;
	label?: string;
};

export const Card = (props: CardProps) => {
	const { className, handler, onBoard, onMouseEnter, isMatchingCard, label } = props;

	const activeClass = `${onBoard ? "active" : ""}`;
	const matchClass = `${isMatchingCard ? "match" : ""}`;
	const cardClassName = `${className} ${activeClass} ${matchClass}`;
	const cardContainerClassName = `${className}__container ${activeClass}`;

	return (
		<div className={cardClassName} onClick={handler} onMouseEnter={onMouseEnter}>
			<div className={cardContainerClassName}>{label}</div>
		</div>
	);
};
