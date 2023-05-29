import { useState } from "react";

type ModalProps = {
	delay?: number;
};

export const useModal = (props: ModalProps) => {
	const { delay = 0 } = props;

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setTimeout(() => {
			setIsModalOpen(true);
		}, delay);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return {
		openModal,
		closeModal,
		isModalOpen,
	};
};
