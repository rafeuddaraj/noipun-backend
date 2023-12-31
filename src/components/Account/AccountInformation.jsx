import { useDispatch, useSelector } from "react-redux";
import { accountSelector } from "../../features/accountSlice/accountSelector";
import { useEffect, useRef, useState } from "react";
import { useUpdateProfileMutation } from "../../features/accountSlice/accountApi";
import { updateUserData } from "../../features/accountSlice/accountSlice";
import { useAvatarUploadMutation } from "../../features/imgbbSlice/imgbbAPI";
import useHandleModal from "../../Hooks/useHandleModal";
import VerifiedModal from "./VerifiedModal";

const editInfo = {
    name: "",
    avatar: "",
};

export default function AccountInformation() {
    const modal = useHandleModal();
    const { user } = useSelector(accountSelector);
    const { name, email, avatar, isVerified } = user || {};
    const [updateProfile, { isError, isLoading, isSuccess }] =
        useUpdateProfileMutation();
    const dispatch = useDispatch();
    const [
        uploadAvatar,
        {
            isLoading: avatarIsLoading,
            isError: avatarIsError,
            isSuccess: avatarIsSuccess,
        },
    ] = useAvatarUploadMutation();

    

    const [input, setInput] = useState(editInfo);
    const [isEdit, setIsEdit] = useState(false);
    const [updatedLocal, setUpdatedLocal] = useState(false);
    const avatarRef = useRef(null);

    useEffect(() => {
        if (name) {
            setInput((prev) => ({ ...prev, name, avatar }));
            setUpdatedLocal(true);
        }
    }, [avatar, name]);

    useEffect(() => {
        if (name && updatedLocal) {
            setIsEdit(input.name !== name && input.name.length > 0);
        }
    }, [input.name, name, isSuccess, updatedLocal]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await updateProfile({
                name: input.name,
            }).unwrap();

            dispatch(updateUserData({ ...user, ...response }));
            localStorage.setItem(
                "noipunAuth",
                JSON.stringify({ ...user, ...response })
            );
        } catch (error) {
            console.error("Error updating profile:", error);
            setInput((prev) => ({ ...prev, name, email }));
        } finally {
            setIsEdit(false);
            setUpdatedLocal(false);
        }
    };
    const handleImageChange = async (e) => {
        const image = e.target.files[0];
        console.log("Test");
        console.log(e.target.files);

        try {
            const formData = new FormData();
            formData.append("image", image);

            const responseAvatar = await uploadAvatar(formData);

            if (responseAvatar.data.status === 200) {
                const responseUpdateProfile = await updateProfile({
                    avatar: responseAvatar.data?.data?.display_url,
                });

                // console.log(responseUpdateProfile);

                dispatch(
                    updateUserData({
                        ...user,
                        avatar: responseUpdateProfile?.data?.avatar,
                    })
                );
                localStorage.setItem(
                    "noipunAuth",
                    JSON.stringify({
                        ...user,
                        avatar: responseUpdateProfile?.data?.avatar,
                    })
                );
                avatarRef.current.reset();
            } else {
                console.log(responseAvatar.error);
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <>
            <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
                <div className="py-5">
                    <div className="w-full">
                        <h2>Avatar image</h2>
                        <div className="mx-auto mb-5 flex flex-row items-center bg-neutral-100 py-5 lg:mx-0 lg:w-1/2">
                            <img
                                className="ml-5 h-20 w-20 rounded-full"
                                src={
                                    avatar ||
                                    "https://i.ibb.co/hV3TMVY/avatar-nobody.png"
                                }
                                alt="Sarah Johnson image"
                            />

                            <form ref={avatarRef}>
                                <div>
                                    <label className="block">
                                        <span className="sr-only">
                                            Choose profile photo
                                        </span>
                                        <input
                                            type="file"
                                            className="mx-auto ml-5 flex w-full justify-center border-yellow-400 text-sm outline-none file:mr-4 file:bg-amber-400 file:py-2 file:px-4 file:text-sm file:font-semibold"
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                    <form
                        className="flex w-full flex-col gap-3"
                        onSubmit={handleSubmit}>
                        <div className="flex w-full flex-col">
                            <label className="flex" htmlFor="name">
                                Name
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                            </label>
                            <input
                                className="w-full border px-4 py-2 lg:w-1/2"
                                type="text"
                                name="name"
                                value={input.name}
                                required
                                maxLength={30}
                                onChange={(e) =>
                                    setInput((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                                placeholder="Sarah"
                            />
                        </div>

                        <div className="flex w-full flex-col">
                            <label className="flex" htmlFor="name">
                                Email
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                            </label>
                            <input
                                className="w-full border px-4 py-2 lg:w-1/2"
                                type="email"
                                value={email}
                                disabled={true}
                                onChange={() => {}}
                                placeholder="Johnson"
                            />
                        </div>

                        {/* Test */}

                        <div>
                            <div className="text-start">
                                <label className="flex" htmlFor="name">
                                    Verification
                                    <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                                </label>
                                <div
                                    onClick={modal.handleShowModal}
                                    className="flex items-start justify-start mb-6 w-full border px-4 py-2 lg:w-1/2 cursor-pointer">
                                    {isVerified ? (
                                        <svg
                                            className="w-6 h-6 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-6 h-6 text-red-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    )}
                                    <span className="ml-2 cursor-pointer">
                                        {isVerified
                                            ? "ভেরিফাইড"
                                            : "ভেরিফাইড করুন"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {isEdit && (
                            <div>
                                <button
                                    disabled={isLoading}
                                    style={{ backgroundColor: "#22c55e" }}
                                    type="submit"
                                    className="text-white py2 px-4">
                                    Save
                                </button>
                            </div>
                        )}

                        {/* Test end */}

                        {/* <div className="flex w-full flex-col">
                            <hr />
                            <h2>Account Verification</h2>
                            <div>
                                <label className="flex" htmlFor="name">
                                    <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                                        {isVerified
                                            ? "আপনার একাউন্টটি সফল ভাবে ফেরিভাইট হয়েছে।"
                                            : `আপনার একাউন্টটি এখনো একটিভ হয়নি। দয়া করে আপনার ${email} মেইলটি চেক করুন। আমরা একটি একটিভেশন লিংক পাঠিয়েছি।`}
                                    </span>
                                </label>
                                <div className="text-start">
                                    <input
                                        className="inline-block border px-4 py-2"
                                        type="checkbox"
                                        value={email}
                                        disabled={true}
                                        checked={isVerified}
                                        placeholder="Johnson"
                                    />
                                </div>
                            </div>
                        </div> */}
                    </form>
                </div>
            </section>
            {!isVerified && (
                <VerifiedModal
                    email={email}
                    name={name}
                    handleShowModal={modal.handleShowModal}
                    showModal={modal.showModal}
                />
            )}
        </>
    );
}
