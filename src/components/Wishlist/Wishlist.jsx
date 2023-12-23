export default function Wishlist() {
    return (
        <>
            <section className="hidden w-full max-w-[1200px] grid-cols-1 gap-8 px-5 pb-10 md:grid">
                {/* <!-- 1 --> */}
                <div className="flex w-full flex-row h-44 items-center justify-between border py-5 px-4">
                    <div className="flex w-full items-center gap-4">
                        <img
                            width="100px"
                            className="object-cover"
                            src="./assets/images/kitchen.png"
                            alt="Kitchen image"
                        />

                        <div className="flex w-2/5 flex-col justify-center">
                            <p className="text-xl font-bold">ITALIAN KITCHEN</p>
                            <p className="text-gray-500">
                                Availability:
                                <span className="font-medium text-green-600">
                                    In Stock
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex w-3/5 items-center justify-between flex-row">
                        <p className="mt-2 text-xl font-bold text-violet-900">
                            $320.00
                        </p>

                        <div className="mt-2 flex items-center">
                            <button className="w-full px-2 bg-amber-400 py-2 lg:px-5">
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

                <div className="flex w-full h-44 flex-row items-center justify-between border py-5 px-4">
                    <div className="flex w-full items-center gap-4">
                        <img
                            width="100px"
                            className="object-cover"
                            src="./assets/images/bedroom.png"
                            alt="Bedroom image"
                        />

                        <div className="flex flex-col justify-center">
                            <p className="text-xl font-bold">QUEEN SIZE BED</p>
                            <p className="text-gray-500">
                                Availability:
                                <span className="font-medium text-green-600">
                                    In Stock
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex w-3/5 items-center justify-between flex-row">
                        <p className="mt-2 text-xl font-bold text-violet-900">
                            $320.00
                        </p>

                        <div className="mt-2 flex items-center">
                            <button className="w-full px-2 bg-amber-400 py-2 lg:px-5">
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

                <div className="flex w-full h-44 flex-row items-center justify-between border py-5 px-4">
                    <div className="flex w-full items-center gap-4">
                        <img
                            width="100px"
                            className="object-cover"
                            src="./assets/images/living-room.png"
                            alt="Sofa image"
                        />

                        <div className="flex flex-col justify-center">
                            <p className="text-xl font-bold">LARGE SOFA</p>
                            <p className="text-gray-500">
                                Availability:
                                <span className="font-medium text-green-600">
                                    In Stock
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex w-3/5 items-center justify-between flex-row">
                        <p className="mt-2 text-xl font-bold text-violet-900">
                            $320.00
                        </p>

                        <div className="mt-2 flex items-center">
                            <button className="w-full px-2 bg-amber-400 py-2 lg:px-5">
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

                <div className="flex w-full h-44 flex-row items-center justify-between border py-5 px-4">
                    <div className="flex w-full items-center gap-4">
                        <img
                            width="100px"
                            className="object-cover"
                            src="./assets/images/product-chair.png"
                            alt="Chair image"
                        />

                        <div className="flex flex-col justify-center">
                            <p className="text-xl font-bold">CHAIR PURPLE</p>
                            <p className="text-gray-500">
                                Availability:
                                <span className="font-medium text-red-600">
                                    Out of Stock
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex w-3/5 items-center justify-between flex-row">
                        <p className="mt-2 text-xl font-bold text-violet-900">
                            $320.00
                        </p>

                        <div className="mt-2 flex items-center">
                            <button className="w-full px-2 bg-amber-400 py-2 lg:px-5">
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
