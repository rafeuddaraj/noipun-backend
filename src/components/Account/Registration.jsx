import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../features/accountSlice/accountApi";
import { login, register } from "../../features/accountSlice/accountSlice";
import Error from "../ui/Error";
import { useAvatarUploadMutation } from "../../features/imgbbSlice/imgbbAPI";

export default function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAdult, setIsAdult] = useState(true);
    const [signupServer, { isLoading, isError, error }] = useSignupMutation();
    const [isMatchedPassword, setIsMatchedPassword] = useState(true);
    const [authenticateUpload] = useAvatarUploadMutation();
    let showError = useRef(null);
    const [input, setInput] = useState({
        email: "",
        password: "",
        password2: "",
        name: "",
        shop_name: "",
        address: "",
        nid_front: null,
        nid_back: null,
        phone_number: "",
    });

    const handleSignup = (e) => {
        e.preventDefault();
        (async () => {
            const formData1 = new FormData();
            formData1.append("image", input.nid_front);
            if (isAdult) {
                const formData2 = new FormData();
                formData2.append("image", input.nid_back);
                const front = await authenticateUpload(formData1);
                const back = await authenticateUpload(formData2);
                signupServer({
                    ...input,
                    front: front.data.data.display_url,
                    back: back.data.data.display_url,
                })
                    .unwrap()
                    .then((data) => {
                        localStorage.setItem(
                            "noipunAuth",
                            JSON.stringify({
                                front: front.data.data.display_url,
                                back: back.data.data.display_url,
                                ...data,
                                password: input.password,
                            })
                        );
                        dispatch(
                            login({
                                ...data,
                                password: input.password,
                                front,
                                back,
                            })
                        );
                        dispatch(register(true));
                        navigate("/");
                    });
            } else {
                const front = await authenticateUpload(formData1);
                signupServer({
                    ...input,
                    front: front.data.data.display_url,
                    back: front.data.data.display_url,
                })
                    .unwrap()
                    .then((data) => {
                        localStorage.setItem(
                            "noipunAuth",
                            JSON.stringify({
                                front: front.data.data.display_url,
                                back: front.data.data.display_url,
                                ...data,
                                password: input.password,
                            })
                        );
                        dispatch(
                            login({
                                ...data,
                                password: signupData.password,
                                front,
                                back: front,
                            })
                        );
                        dispatch(register(true));
                        navigate("/");
                    });
            }
        })();
    };

    useEffect(() => {
        if (
            input.password === "" ||
            (input.password && input.password2 === "") ||
            input.password === input.password2
        ) {
            showError.current = null;
            setIsMatchedPassword(true);
        } else {
            setIsMatchedPassword(false);
            showError.current = <Error message={"আপনার পাসওয়ার্ড ঠিক করুন"} />;
        }
    }, [input.password, input.password2]);

    if (isError) {
        let message = "";
        if (error?.status === 400) {
            message =
                error?.email &&
                `আরে ${input.name} আপনি তো নৈপুনের রেজিস্ট্রারকৃত একজন ইউজার। আবার কেনো রেজিস্টার করবেন। আপনি লগইন করুন।  `;
        } else if (error?.status === "FETCH_ERROR") {
            message = "সার্ভারের ত্রুটি হয়েছে দয়া করে আবার ট্রাই করুন।";
        }
        showError.current = <Error message={message} />;
    }

    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
                <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
                    {/* {isError && (
                        <Success
                            message={"আপনার একাউন্টি সভল ভাবে তৈরি করা হয়েছে।"}
                            description={`আপনি যেহেতু নৈপুনে একাউন্ট করেছেন আমরা ধরেই নিচ্ছি আপনি একজন সঠিক ইউজার। তাই আমরা আপনাকে সঠিক বলে প্রমাণ করার জন্য এক্টিভেশন লিংক পাঠিয়েছি আপনার এই ${input.email} এই ইমেইলে। আপনি যদি ভেরিফাইট ইউজার না হোন তাহলে আপনি নৈপুন থেকে কোনো পণ্য ক্রয় করতে পারবেন না।`}
                        />
                    )} */}
                    {showError.current && showError.current}
                    <div className="">
                        <p className="text-4xl font-bold">CREATE AN ACCOUNT</p>
                        <p>Register for new seller</p>
                    </div>

                    <form
                        className="mt-6 flex flex-col"
                        onSubmit={handleSignup}>
                        <div>
                            <label className={"block"} htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className="mb-3 mt-3 border px-4 py-2 block w-full"
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={handleInput}
                                required
                                placeholder="Bogdan Bulakh"
                            />
                        </div>

                        <div>
                            <label className="mt-3 block" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="mt-3 border px-4 py-2 block w-full"
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={handleInput}
                                required
                                placeholder="user@mail.com"
                            />
                        </div>
                        <div>
                            <label
                                className="mt-3 block"
                                htmlFor="phone_number">
                                Phone Number
                            </label>
                            <input
                                className="mt-3 border px-4 py-2 block w-full"
                                type="text"
                                name="phone_number"
                                value={input.phone_number}
                                onChange={handleInput}
                                required
                                placeholder="013xxxxxxxx"
                            />
                        </div>

                        <div>
                            <label className="mt-3 block" htmlFor="shop_name">
                                Shop Name
                            </label>
                            <input
                                className="mt-3 border px-4 py-2 block w-full"
                                type="shop_name"
                                name="shop_name"
                                value={input.shop_name}
                                onChange={handleInput}
                                required
                                placeholder="Noipun"
                            />
                        </div>

                        <div className="mt-4">
                            <input
                                checked={isAdult}
                                onChange={(e) => setIsAdult(e.target.checked)}
                                type="checkbox"
                                id="adult-check"
                                required
                            />
                            <label htmlFor="adult-check">
                                {" "}
                                আপনি কি প্রাপ্তবয়স্ক{" "}
                            </label>
                        </div>

                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="file_input">
                                {isAdult ? "NID Front" : "Birth Certificate"}
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (
                                        file &&
                                        file.type &&
                                        !file.type.startsWith("image/")
                                    ) {
                                        alert(
                                            "Please select a valid image file."
                                        );
                                        return;
                                    }
                                    setInput((prev) => ({
                                        ...prev,
                                        nid_front: file,
                                    }));
                                }}
                                type="file"
                            />
                        </div>

                        {isAdult && (
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    htmlFor="nid_back">
                                    NID Back
                                </label>
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (
                                            file &&
                                            file.type &&
                                            !file.type.startsWith("image/")
                                        ) {
                                            alert(
                                                "Please select a valid image file."
                                            );
                                            return;
                                        }
                                        setInput((prev) => ({
                                            ...prev,
                                            nid_back: file,
                                        }));
                                    }}
                                    id="nid_back"
                                    type="file"
                                />
                            </div>
                        )}

                        <div>
                            <label className="mt-5 block" htmlFor="address">
                                Address
                            </label>
                            <textarea
                                className="mt-3 border px-4 py-2 block w-full"
                                type="address"
                                name="address"
                                value={input.address}
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div>
                            <label className="mt-5 block" htmlFor="email">
                                Password
                            </label>
                            <input
                                className="mt-3 border px-4 py-2 block w-full"
                                type="password"
                                name="password"
                                value={input.password}
                                onChange={handleInput}
                                required
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                            />
                        </div>

                        <div>
                            <label className="mt-5 block" htmlFor="email">
                                Confirm password
                            </label>
                            <input
                                name="password2"
                                className="mt-3 border px-4 py-2 block w-full"
                                type="password"
                                value={input.password2}
                                onChange={handleInput}
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                            />
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" required />
                            <label className={" block"} htmlFor="checkbox">
                                I have read and agree with
                                <NavLink
                                    to={"/terms-and-condition"}
                                    className="text-violet-900">
                                    terms &amp; conditions
                                </NavLink>
                            </label>
                        </div>
                        <button
                            disabled={isLoading || !isMatchedPassword}
                            type="submit"
                            className="my-5 w-full disabled:cursor-default cursor-pointer bg-violet-900 py-2 text-white disabled:bg-gray-400">
                            CREATE ACCOUNT
                        </button>
                    </form>
{/* 
                    <p className="text-center text-gray-500">OR SIGN UP WITH</p>

                    <div className="my-5 flex gap-2">
                        <button className="w-1/2 bg-blue-800 py-2 text-white">
                            FACEBOOK
                        </button>
                        <button className="w-1/2 bg-orange-500 py-2 text-white">
                            GOOGLE
                        </button>
                    </div> */}

                    <p className="text-center">
                        Already have an account?{" " + " "}
                        <NavLink to="/login" className="text-violet-900">
                            Login now
                        </NavLink>
                    </p>
                </div>
            </section>
        </>
    );
}
