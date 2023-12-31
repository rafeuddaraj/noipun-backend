import { Button, Modal } from "keep-react";
import { useEffect, useState } from "react";
import { useRequestEmailVerificationMutation } from "../../features/accountSlice/accountApi";
import TextLoading from "../ui/TextLoading";

export default function VerifiedModal({
    showModal,
    handleShowModal,
    name,
    email,
}) {
    const [requestEmailVerification, { isLoading, isSuccess, isError, error }] =
        useRequestEmailVerificationMutation();
    const [request, setRequest] = useState(false);

    const handleRequestEmailVerification = () => {
        requestEmailVerification();
    };

    useEffect(() => {
        if (isSuccess) {
            setRequest(true);
        }
    }, [isSuccess,handleShowModal]);


    return (
        <>
            <Modal show={showModal} size="lg">
                <Modal.Body>
                    <div className="flex items-center md:items-start gap-2 mb-5">
                        <h3 className="text-body-4 md:text-body-2 font-semibold text-black">
                            হেই <span className="text-green-400">{name}</span>
                            আমি নৈপুন বলছি। আপনি একাউন্ট ভেরিফাইট করতে চাচ্ছেন
                            দেখে আমি অনেক খুশি হয়েছি।
                        </h3>
                    </div>
                    <div>
                        {request ? (
                            <p>
                                আপনাকে নৈপুন আপনার একাউন্ট এক্টিভ করার জন্য একটা
                                এক্টিভেশন লিঙ্ক পাঠিয়েছে আপনার এই{" "}
                                <span>{`"${email}"`}</span> ইমেইলে। আপনি খুব
                                দ্রুত আপনার একাউন্টি ভেরিফাইট করে ফেলুন। আমি
                                নৈপুন আপনার অপেক্ষায় আছি। {name} আপনি আজ থেকে
                                আমার একজন সহযোদ্ধা।
                            </p>
                        ) : (
                            <>
                                {isLoading ? (
                                    <TextLoading/>
                                ) : (
                                    <p>
                                        {name} হ্যাঁলো আমি নৈপুন আমি কি আপনার
                                        একাউন্ট ভেরিফাই করে দিবো।
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className=" flex justify-start gap-4 ">
                        {!request ? (
                            <>
                                <Button
                                    type="outlineGray"
                                    size="sm"
                                    onClick={handleShowModal}>
                                    {isLoading ? ('লোডিং হতে থাকুক') : ('না')}
                                </Button>
                                <Button
                                    disabled={isLoading}
                                    type="outlineGray"
                                    color="info"
                                    size="sm"
                                    onClick={handleRequestEmailVerification}>
                                    হ্যাঁ
                                </Button>
                            </>
                        ) : (
                            <Button
                                type="outlineGray"
                                color="info"
                                size="sm"
                                onClick={handleShowModal}>
                                ঠিক আছে
                            </Button>
                        )}
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
