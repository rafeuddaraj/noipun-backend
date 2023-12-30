
export default function Wishlist() {
    const title = "Printing body hell maharaf magar po"
    return (
        <>
            <section className="w-full max-w-[1200px] grid-cols-1 xl:gap-3 lg:gap-3 min-[300px]:gap-1 px-5 pb-10 grid">
                {/* <!-- 1 --> */}
                <div className="flex w-full flex-row xl:h-44 lg:h-44 min-[300px]:h-fit items-center justify-between border p-2">
                    <div className="flex items-center gap-4 h-full">
                        <div className="xl:w-[160px] lg:w-[120px] min-[300px]:w-[40px] h-full">
                            <img
                                className="object-cover w-full h-full"
                                src="../../../public/vite.svg"
                                alt="Kitchen image"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="xl:text-xl lg:text-xl min-[300px]:text-[.500rem] font-bold">{title.slice(0, 20)}</p>
                            <p className="text-gray-500 xl:text-xl lg:text-xl min-[300px]:text-[10px]">
                                Availability:
                                <br />
                                <span className="font-medium text-green-600">
                                    In Stock
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-row">
                        <p className="mt-2 xl:text-xl lg:text-xl min-[300px]:text-[.500rem] font-bold text-violet-900">
                            $320.00
                        </p>

                        <div className="flex items-center gap-2 xl:flex-row lg:flex-row min-[300px]:flex-col">
                            <button className="xl:text-xl lg:text-xl min-[300px]:text-[.500rem] bg-amber-400 xl:p-[10px_8px] lg:p-[10px_8px] min-[300px]:py-1 rounded-md">
                                Add to cart
                            </button>

                            <i className="ml-5 cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
