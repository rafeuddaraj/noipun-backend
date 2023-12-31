import { useState } from "react";

export default function useHandleModal() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal((prev) => !prev);
    };
    return {
        showModal,
        handleShowModal,
    };
}
