import { Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { useForgetPasswordMutation } from "../../features/accountSlice/accountApi";
import { useState } from "react";

export default function ForgetModal({
    email,
    handleForgetModal,
    showForgetModal,
}) {
    const [forgetPasswordServer, { isLoading, isError, isSuccess }] =
        useForgetPasswordMutation();
    const [success, setSuccess] = useState(false);
    const handleForgetPassword = () => {
        forgetPasswordServer({ email: email });
    };

    let content = null;

    if (isLoading) {
        content = <div>অনুগ্রহ করে অপেক্ষা করুন।</div>;
    }
    if (isError && !isLoading) {
        content = (
            <div className="text-body-4 leading-relaxed text-red-500">
                ক্ষমা করবেন ভাই {email} এই একাউন্ট টি আমাদের কাছে নেই?
            </div>
        );
    }
    if (!isError && !isLoading && isSuccess) {
        content = (
            <div className="text-body-4 leading-relaxed text-metal-500">
                ভাইয়া আপনার {email} এই ইমেইলে একটা রিসেট লিংক পাঠানো হয়েছে। দয়া
                করে মেইল চেক করে পাসওয়ার্ড রিসেট করুন।{" "}
            </div>
        );
    }

    return (
        <>
            <Modal
                icon={<CloudArrowUp size={28} color="#1B4DFF" />}
                size="md"
                show={showForgetModal}
                position="top-center">
                <Modal.Header>Do you want to upload this file?</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        {content !== null ? (
                            content
                        ) : (
                            <p className="text-body-4 leading-relaxed text-metal-500">
                                ভাই আপনি যদি এই {email} একাউন্ট টির পাসওয়ার্ড
                                রিসেট করতে চান তবে Confirm চাপুন
                            </p>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {!isLoading && !isError && !isSuccess && (
                        <>
                            <button
                                onClick={handleForgetModal}
                                className="group rounded-md flex h-min w-fit items-center justify-center text-center font-medium active:focus:scale-95 duration-150 text-metal-600 bg-black border border-metal-200 hover:bg-metal-200/90 active:bg-metal-25 focus:ring-4 focus:ring-metal-50 disabled:text-metal-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100"
                                type="button">
                                <span className="text-body-4 px-5 py-3 flex items-center justify-center cursor-pointer transition-all duration-75 ease-in">
                                    বাতিল করুন
                                </span>
                            </button>
                            <button
                                onClick={handleForgetPassword}
                                disabled={isLoading}
                                className="group rounded-md flex h-min w-fit items-center justify-center text-center font-medium active:focus:scale-95 duration-150 text-metal-600 bg-black border border-metal-200 hover:bg-metal-200/90 active:bg-metal-25 focus:ring-4 focus:ring-metal-50 disabled:text-metal-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100"
                                type="button">
                                <span className="text-body-4 px-5 py-3 flex items-center justify-center cursor-pointer transition-all duration-75 ease-in">
                                    পাসওয়ার্ড রিসেট করুন
                                </span>
                            </button>
                        </>
                    )}
                    {isError && (
                        <button
                            onClick={handleForgetModal}
                            className="group rounded-md flex h-min w-fit items-center justify-center text-center font-medium active:focus:scale-95 duration-150 text-metal-600 bg-black border border-metal-200 hover:bg-metal-200/90 active:bg-metal-25 focus:ring-4 focus:ring-metal-50 disabled:text-metal-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100"
                            type="button">
                            <span className="text-body-4 px-5 py-3 flex items-center justify-center cursor-pointer transition-all duration-75 ease-in">
                                বাতিল করুন
                            </span>
                        </button>
                    )}
                    {isSuccess && (
                        <button
                            onClick={handleForgetModal}
                            className="group rounded-md flex h-min w-fit items-center justify-center text-center font-medium active:focus:scale-95 duration-150 text-metal-600 bg-black border border-metal-200 hover:bg-metal-200/90 active:bg-metal-25 focus:ring-4 focus:ring-metal-50 disabled:text-metal-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100"
                            type="button">
                            <span className="text-body-4 px-5 py-3 flex items-center justify-center cursor-pointer transition-all duration-75 ease-in">
                                ঠিক আছে
                            </span>
                        </button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}
