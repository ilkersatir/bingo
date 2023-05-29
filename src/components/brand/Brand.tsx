import { CSSProperties } from "react";
import logo from "assets/images/logo.png";

import "./Brand.style.scss";

type BrandProps = {
	width?: number;
	height?: number;
	style?: CSSProperties;
};

export const Brand = (props: BrandProps) => {
	const { width, height, style } = props;

	return (
		<img
			className="logo"
			src={logo}
			alt="Logo"
			width={width}
			height={height}
			style={{
				...style,
				maxWidth: width,
			}}
		/>
	);
};
