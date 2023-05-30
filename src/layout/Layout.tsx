import { ReactNode, useMemo } from "react";
import { Header, Parallax } from "./partials";

type LayoutProps = {
	showHeader?: boolean;
	children?: ReactNode;
	centered?: boolean;
	contentCentered?: boolean;
};

export const Layout = (props: LayoutProps) => {
	const { showHeader, children, centered } = props;

	const memoizedHeader = useMemo(() => <Header showHeader={showHeader} />, []);
	const memoizedParallax = useMemo(() => <Parallax />, []);

	const layoutClassName = `layout__content ${
		centered ? "layout__content--centered" : ""
	}`;

	return (
		<main className="layout">
			{memoizedHeader}
			<div className={layoutClassName}>{children}</div>
			{memoizedParallax}
		</main>
	);
};
