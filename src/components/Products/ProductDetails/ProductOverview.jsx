// import { useParams } from "react-router-dom";

export default function ProductOverview({ product, isSuccess,category }) {

    const {
        product_title,
        description,
        price,
        is_available,
        total_buyed,
        quantity,} = product || {}

    return (
        <>
            <div className="mx-auto px-5 lg:px-5">
                <h2 className="pt-3 text-2xl font-bold lg:pt-0">
                    {product_title}
                </h2>
                {/* <div className="mt-1">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-400">
                            <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-400">
                            <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-400">
                            <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-400">
                            <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 text-gray-200">
                            <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <p className="ml-3 text-sm text-gray-400">(150 reviews)</p>
                    </div>
                </div> */}

                <p className="mt-5 font-bold">
                    স্টক: <span className="text-green-600">{is_available ? "পণ্যটি রয়েছে" : "পণ্যটি স্টকে নেই"}</span>
                    {/* পণ্যটি নেই */}
                </p>
                {/* <p className="font-bold">
                    ব্র্যান্ড: <span className="font-normal">Apex</span>
                </p> */}
                <p className="font-bold">
                    ক্যাটেগরি: <span className="font-normal">{category}</span>
                </p>
                {/* <p className="font-bold">
                    SKU: <span className="font-normal">BE45VGTRK</span>
                </p> */}

                <p className="mt-4 text-4xl font-bold text-violet-900">
                    দামঃ{" "}
                    {/* <span className="text-xs text-gray-400 line-through">৳{price}</span> */}
                    <span className="font-normal">৳{price}</span>
                </p>

                <p className="pt-5 text-sm leading-5 text-gray-500">
                    {`${description?.slice(0,100)}......`}
                </p>

                <div className="mt-6">
                    <p className="pb-2 text-xs text-gray-500">পরিমাণ <span className="font-extrabold text-lg">{quantity}</span> </p>
                </div>

                <div className="mt-7 flex flex-row items-center xl:gap-6 lg:gap-4 min-[300px]:gap-3">
                    <button className="flex h-12 w-full items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="mr-3 h-4 w-4">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        যোগ করুন
                    </button>
                    {/* <button className="flex h-12 w-full items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="mr-3 h-4 w-4">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                        Wishlist
                    </button> */}
                </div>
            </div>
        </>
    );
}
