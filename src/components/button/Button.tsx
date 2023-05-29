import { ReactNode } from "react";

type ButtonProps = {
	handler?: () => void;
	children?: ReactNode;
	variant?: "round-small" | "round-big" | "square-small" | "square-big";
};

export const Button = (props: ButtonProps) => {
	const { handler, children, variant } = props;

	const buttonClassName = `btn ${variant}`;

	return (
		<button className={buttonClassName} onClick={handler}>
			{children}
		</button>
	);
};
