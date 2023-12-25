import { useState } from "react";
import { useChangePasswordMutation } from "../../features/accountSlice/accountApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/accountSlice/accountSlice";
import Error from "../ui/Error";

export default function ChangePassword() {
    const [changePasswordServer, { isLoading, isSuccess, isError, error }] =
        useChangePasswordMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        confirm_password: "",
        new_password: "",
        old_password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        (async () => {
            try {
                const response = await changePasswordServer(input).unwrap();
                dispatch(logout());
                navigate("/login");
            } catch (err) {
                // console.log(err);
            }
        })();
    };

    const handleInput = (e) =>
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    let errorShow = null;

    if (isError) {
        let message = "";
        if (error?.status === 400) {
            if (error?.data?.new_password) {
                message = error?.data?.new_password?.join(", ");
            } else if (error?.data?.non_field_errors) {
                message = error?.data?.non_field_errors?.join(", ");
            } else if (error?.data?.old_password) {
                message = error?.data?.old_password?.join(", ");
            } 

            errorShow = <Error message={message} />;
            console.log(error);
        }
    }

    return (
        <>
            <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
                <div className="py-5">
                    <div className="w-full"></div>
                    {isError && errorShow}
                    <form
                        className="flex w-full flex-col gap-3"
                        onSubmit={handleSubmit}>
                        <div className="flex w-full flex-col">
                            <label className="flex" htmlFor="name">
                                Current password
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                            </label>
                            <input
                                className="w-full border px-4 py-2 lg:w-1/2"
                                type="password"
                                name="old_password"
                                value={input.old_password}
                                onChange={handleInput}
                                placeholder="Current password"
                            />
                        </div>

                        <div className="flex w-full flex-col">
                            <label className="flex" htmlFor="name">
                                New Password
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                            </label>
                            <input
                                className="w-full border px-4 py-2 lg:w-1/2"
                                type="password"
                                name="new_password"
                                value={input.new_password}
                                onChange={handleInput}
                                placeholder="New password"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="flex" htmlFor="">
                                Repeat New Password
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                            </label>
                            <input
                                className="w-full border px-4 py-2 lg:w-1/2"
                                type="password"
                                name="confirm_password"
                                value={input.confirm_password}
                                onChange={handleInput}
                                placeholder="Confirm password"
                            />
                        </div>

                        <button className="mt-4 w-40 bg-violet-900 px-4 py-2 text-white">
                            Save changes
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
