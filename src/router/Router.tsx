import { Suspense, lazy, memo } from "react";
import { Route, Routes } from "react-router-dom";

const StartView = lazy(() =>
	import("../views/StartView").then((module) => ({ default: module.StartView }))
);

const InGameView = lazy(() =>
	import("../views/InGameView").then((module) => ({ default: module.InGameView }))
);

const loadingStyle = {
	width: "100%",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "2rem",
	fontWeight: "bold",
	opacity: 0.5,
};

export const Router = () => {
	return (
		<Suspense fallback={<div style={loadingStyle}>Loading...</div>}>
			<Routes>
				<Route path="/" element={<StartView />} />
				<Route path="singleplayer" element={<InGameView />} />
				<Route path="*" element={<StartView />} />
			</Routes>
		</Suspense>
	);
};

export default memo(Router);
