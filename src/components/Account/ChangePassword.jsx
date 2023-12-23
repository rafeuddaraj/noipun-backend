export default function ChangePassword() {
    return (
        <>
            <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
                <div className="py-5">
                    <div className="w-full"></div>
                    <form className="flex w-full flex-col gap-3" action="">
                        <div className="flex w-full flex-col">
                            <label className="flex" htmlFor="name">
                                Current password
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                            </label>
                            <input
                                className="w-full border px-4 py-2 lg:w-1/2"
                                type="password"
                                placeholder=""
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
                                placeholder=""
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
                                placeholder=""
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
