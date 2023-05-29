import { ReactNode } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Modal.style.scss";

type CustomModalProps = {
	isOpen: boolean;
	onClose?: () => void;
	children: ReactNode;
};

export const CustomModal = (props: CustomModalProps) => {
	const { isOpen, onClose, children } = props;

	const closeModal = () => {
		if (onClose) {
			onClose();
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				{onClose && (
					<span className="close" onClick={closeModal}>
						<AiOutlineCloseCircle size={26} />
					</span>
				)}

				{children}
			</div>
		</div>
	);
};
