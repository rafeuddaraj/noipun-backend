import { useState } from "react";
import AddressModal from "./AddressModal";
import DeleteModal from "./DeleteModal";

export default function Address() {
    const [showModal, setShowModal] = useState(false);
    const handleAddressModal = () => {
        setShowModal(!showModal);
    };

    const [showErrorModalX, setShowErrorModalX] = useState(false);

    const onClickErrorModal = () => {
        setShowErrorModalX(!showErrorModalX);
    };

    return (
        <>
            <div className="border-b border-gray-400 p-4">
                <h1 className="text-lg">
                    Shipping Address
                    <p className="inline-block text-sm">
                        (Please select only one! shipping address)
                    </p>
                </h1>
            </div>
            <div className="p-6">
                <div className="card-body">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-3 min-[300px]:grid-cols-1 justify-around items-center gap-3">
                        <div className="">
                            <input
                                className="me-2"
                                type="radio"
                                name="accountAddressId"
                                id="1433724"
                                data-country="1"
                                value="1433724"
                                required=""
                                checked=""
                            />
                            <label className="form-check-label" htmlFor="1433724">
                                খিলখেত
                                <span
                                    className="d-block js--address-type"
                                    data-type="HOME">
                                    (HOME)
                                </span>
                            </label>
                        </div>
                        <div className="address">
                            <p className="text-dark">
                                Name:
                                <span className="js--acc-name">Rafe Uddaraj</span>
                            </p>
                            <p className="text-dark">
                                Phone:
                                <span className="js--acc-phone">
                                    8801306499101, 09638342909
                                </span>
                            </p>
                            <p className="js--acc-address mb-1">
                                খিলক্ষেত, বেপারী পাড়া, দোকান-নামঃ মেসার্স
                                মাষ্টার এগ্রো ফুড এন্ড রাইস এজেন্সি
                            </p>
                            <p>
                                <span
                                    className="js--acc-id"
                                    data-acc-id="1433724"></span>{" "}
                                <span zone-id="" className="js--acc-zone"></span>{" "}
                                <span area-id="56" className="js--acc-area">
                                    খিলখেত
                                </span>
                                ,
                                <span city-id="2" className="js--acc-city">
                                    ঢাকা
                                </span>
                                ,
                                <span country-id="1" className="js--acc-country">
                                    বাংলাদেশ
                                </span>
                                ।
                            </p>
                        </div>
                        <div className="flex justify-evenly">
                            <button
                                type="button"
                                onClick={handleAddressModal}
                                className="text-center">
                                <img
                                    src="https://www.rokomari.com/static/200/images/icon-edit.png"
                                    alt="edit_icon"
                                />
                                Edit
                            </button>
                            <button type="button" className="text-center" onClick={onClickErrorModal}>
                                <img
                                    src="https://www.rokomari.com/static/200/images/icon-delete.png"
                                    alt="delete_icon"
                                />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <AddressModal
                    handleAddressModal={handleAddressModal}
                    showModal={showModal}
                />
            )}
            {showErrorModalX && <DeleteModal onClickErrorModal={onClickErrorModal} showErrorModalX={showErrorModalX}/>}
        </>
    );
}
