import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../features/accountSlice/accountApi";
import { login, register } from "../../features/accountSlice/accountSlice";
import Error from "../ui/Error";

export default function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signupServer, { isLoading, isError, error }] = useSignupMutation();
    const [isMatchedPassword, setIsMatchedPassword] = useState(true);
    let showError = useRef(null);
    const [input, setInput] = useState({
        email: "",
        password: "",
        password2: "",
        name: "",
    });

    const handleSignup = (e) => {
        e.preventDefault();
        const signupData = { ...input };
        signupServer(signupData)
            .unwrap()
            .then((data) => {
                localStorage.setItem("noipunAuth", JSON.stringify({...data,password:signupData.password}));
                navigate("/");
            });
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
    },[input.password,input.password2]);

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
                        <p className="text-4xl font-bold">একাউন্ট তৈরি করুন</p>
                        {/* <p>Register for new customer</p> */}
                    </div>

                    <form className="mt-6 flex flex-col" onSubmit={handleSignup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            className="mb-3 mt-3 border px-4 py-2"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={handleInput}
                            required
                            placeholder="Bogdan Bulakh"
                        />

                        <label className="mt-3" htmlFor="email">
                            ই-মেইল
                        </label>
                        <input
                            className="mt-3 border px-4 py-2"
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={handleInput}
                            required
                            placeholder="user@mail.com"
                        />

                        <label className="mt-5" htmlFor="email">
                            পাসওয়ার্ড
                        </label>
                        <input
                            className="mt-3 border px-4 py-2"
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={handleInput}
                            required
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                        />

                        <label className="mt-5" htmlFor="email">
                            একাউন্ট তৈরি করুন
                        </label>
                        <input
                            name="password2"
                            className="mt-3 border px-4 py-2"
                            type="password"
                            value={input.password2}
                            onChange={handleInput}
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                        />
                        <div className="flex gap-2">
                            <input type="checkbox" 
                            required/>
                            <label htmlFor="checkbox">
                                I have read and agree with
                                <a href="#" className="text-violet-900">
                                    terms &amp; conditions
                                </a>
                            </label>
                        </div>
                        <button
                            disabled={isLoading || !isMatchedPassword}
                            type="submit"
                            className="my-5 w-full bg-violet-900 py-2 text-white">
                            CREATE ACCOUNT
                        </button>
                    </form>

                    {/* <p className="text-center text-gray-500">OR SIGN UP WITH</p>

                    <div className="my-5 flex gap-2">
                        <button className="w-1/2 bg-blue-800 py-2 text-white">
                            FACEBOOK
                        </button>
                        <button className="w-1/2 bg-orange-500 py-2 text-white">
                            GOOGLE
                        </button>
                    </div> */}

                    <p className="text-center">
                        Already have an account?
                        <Link to="/login" className="text-violet-900">
                            Login now
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
