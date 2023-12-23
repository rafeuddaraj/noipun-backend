import { useState } from "react";
import AddressModal from "./AddressModal";

export default function AddAddress() {
    const [showModal, setShowModal] = useState(false);
    const handleAddressModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <div className=" text-center">
                <button className="flex justify-center items-center" onClick={handleAddressModal}>
                    <img
                        className="me-2"
                        src="https://www.rokomari.com/static/200/images/icon-plus.png"
                        alt="plus_icon"
                    />
                    Add new address
                </button>
            </div>

            {showModal && <AddressModal handleAddressModal={handleAddressModal} showModal={showModal}/>}
        </>
    );
}
