import { CSSProperties, ReactNode, useMemo } from "react";
import { TicketDots } from ".";

type CardProps = {
	handler?: () => void;
	children?: ReactNode;
	style?: CSSProperties;
	className?: string;
};

export const Ticket = (props: CardProps) => {
	const memoizedTicketDots = useMemo(() => <TicketDots />, []);

	const { className, handler, children, style } = props;

	return (
		<div className={className} onClick={handler} style={style}>
			{memoizedTicketDots}
			<div className="drawer__ticket__content">{children}</div>
			{memoizedTicketDots}
		</div>
	);
};
