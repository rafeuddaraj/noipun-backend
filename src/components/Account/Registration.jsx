import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../features/accountSlice/accountApi";

export default function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signupServer, { isLoading }] = useSignupMutation();
    const [input, setInput] = useState({
        email: "",
        password: "",
        password2: "",
        name: "",
    });
    // console.log(data);

    const handleSignup = (e) => {
        e.preventDefault();
        const signupData = {...input};
        signupServer(signupData)
            .unwrap()
            .then((data) => {
                localStorage.setItem("noipunAuth", JSON.stringify({...data,password:signupData.password}));
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
                <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
                    <div className="">
                        <p className="text-4xl font-bold">CREATE AN ACCOUNT</p>
                        <p>Register for new customer</p>
                    </div>

                    <form className="mt-6 flex flex-col" onSubmit={handleSignup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            className="mb-3 mt-3 border px-4 py-2"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={handleInput}
                            placeholder="Bogdan Bulakh"
                        />

                        <label className="mt-3" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="mt-3 border px-4 py-2"
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={handleInput}
                            placeholder="user@mail.com"
                        />

                        <label className="mt-5" htmlFor="email">
                            Password
                        </label>
                        <input
                            className="mt-3 border px-4 py-2"
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={handleInput}
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                        />

                        <label className="mt-5" htmlFor="email">
                            Confirm password
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
                            <input type="checkbox" />
                            <label htmlFor="checkbox">
                                I have read and agree with
                                <a href="#" className="text-violet-900">
                                    terms &amp; conditions
                                </a>
                            </label>
                        </div>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="my-5 w-full bg-violet-900 py-2 text-white">
                            CREATE ACCOUNT
                        </button>
                    </form>

                    <p className="text-center text-gray-500">OR SIGN UP WITH</p>

                    <div className="my-5 flex gap-2">
                        <button className="w-1/2 bg-blue-800 py-2 text-white">
                            FACEBOOK
                        </button>
                        <button className="w-1/2 bg-orange-500 py-2 text-white">
                            GOOGLE
                        </button>
                    </div>

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
