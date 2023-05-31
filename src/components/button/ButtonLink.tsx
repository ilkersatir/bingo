import { CSSProperties, ReactNode } from "react";
import { LinkProps, useNavigate } from "react-router-dom";

type ButtonProps = {
	handler?: () => void;
	children?: ReactNode;
	path?: LinkProps["to"];
	style?: CSSProperties;
};

export const ButtonLink = (props: ButtonProps) => {
	const { children, path = "", style } = props;
	const navigate = useNavigate();

	const handleClick = () => {
		if (path === "reload") {
			window.location.reload();
		} else {
			navigate(path);
		}
	};

	return (
		<button className="btn btn--link" onClick={handleClick} style={style}>
			{children}
		</button>
	);
};
