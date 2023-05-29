import { CSSProperties, ReactNode } from "react";

type CardProps = {
	handler?: () => void;
	children?: ReactNode;
	style?: CSSProperties;
	className?: string;
	onBoard?: boolean;
	onMouseEnter?: () => void;
	isMatchingCard?: boolean;
};

export const Card = (props: CardProps) => {
	const { className, handler, children, onBoard, isMatchingCard, onMouseEnter } = props;

	const cardClassName = `${className} ${onBoard ? "active" : ""} ${
		isMatchingCard ? "match" : ""
	}`;
	const cardContainerClassName = `${className}__container ${onBoard ? "active" : ""}`;

	return (
		<div className={cardClassName} onClick={handler} onMouseEnter={onMouseEnter}>
			<div className={cardContainerClassName}>{children}</div>
		</div>
	);
};
