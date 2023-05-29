import { ReactNode } from "react";
import { LinkProps, useNavigate } from "react-router-dom";

type ButtonProps = {
	handler?: () => void;
	children?: ReactNode;
	path?: LinkProps["to"];
};

export const ButtonLink = (props: ButtonProps) => {
	const { children, path = "" } = props;
	const navigate = useNavigate();

	const handleClick = () => {
		if (path === "reload") {
			window.location.reload();
		} else {
			navigate(path);
		}
	};

	return (
		<button className="btn btn--link" onClick={handleClick}>
			{children}
		</button>
	);
};
