import { useState } from "react";
import {
    useGetUserQuery,
    useLoginMutation,
} from "../../features/accountSlice/accountApi";
import { useDispatch } from "react-redux";
import { login } from "../../features/accountSlice/accountSlice";
import { useNavigate } from "react-router-dom";
import ForgetModal from "./ForgetModal";
import { validateEmail } from "../../utils/validateEmail";

export default function Login() {
    const [showModal, setShowModal] = useState(false);
    const handleForgetModal = () => {
        validateEmail(input.email) && setShowModal(!showModal);
    };

    const [loginServer, { isLoading, isSuccess }] = useLoginMutation();
    const { data } = useGetUserQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
        agree: false,
    });
    // console.log(data);

    const handleLogin = (e) => {
        e.preventDefault();
        const loginData = {
            email: input.email,
            username: input.email,
            password: input.password,
        };
        loginServer(loginData)
            .unwrap()
            .then((data) => {
                dispatch(login(data));
                localStorage.setItem(
                    "noipunAuth",
                    JSON.stringify({ ...data, password: input.password })
                );
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
            <section className="mx-auto flex-grow w-full mt-10 mb-10 max-w-[1200px] px-5">
                <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
                    <div className="">
                        <p className="text-4xl font-bold">LOGIN</p>
                        <p>Welcome back, customer!</p>
                    </div>

                    <form className="mt-6 flex flex-col" onSubmit={handleLogin}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            className="mb-3 mt-3 border px-4 py-2"
                            type="email"
                            name="email"
                            placeholder="youremail@domain.com"
                            onChange={handleInput}
                            value={input.email}
                        />
                        {validateEmail(input.email) && (
                            <div className="text-end">
                                <button
                                    onClick={handleForgetModal}
                                    className="text-violet-900">
                                    Forgot password
                                </button>
                            </div>
                        )}

                        <label htmlFor="email">Password</label>
                        <input
                            name="password"
                            onChange={handleInput}
                            className="mt-3 border px-4 py-2"
                            type="password"
                            value={input.password}
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                        />
                        <div className="mt-4">
                            <div className="flex gap-2">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={input.agree}
                                    onChange={(e) =>
                                        setInput((prev) => ({
                                            ...prev,
                                            agree: e.target.checked,
                                        }))
                                    }
                                />
                                <label htmlFor="checkbox">Remember me</label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="my-5 w-full bg-violet-900 py-2 text-white">
                            LOGIN
                        </button>
                    </form>

                    <p className="text-center text-gray-500">OR LOGIN WITH</p>

                    <div className="my-5 flex gap-2">
                        <button className="w-1/2 bg-blue-800 py-2 text-white">
                            FACEBOOK
                        </button>
                        <button className="w-1/2 bg-orange-500 py-2 text-white">
                            GOOGLE
                        </button>
                    </div>

                    <p className="text-center">
                        Don`t have account?
                        <a href="sign-up.html" className="text-violet-900">
                            Register now
                        </a>
                    </p>
                </div>
            </section>

            {showModal && validateEmail(input.email) && (
                <ForgetModal
                    email={input.email}
                    showForgetModal={showModal}
                    handleForgetModal={handleForgetModal}
                />
            )}
        </>
    );
}
