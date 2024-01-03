import { Link } from "react-router-dom";

import { Card } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useGetCategoryQuery } from "../../features/categorySlice/categoryApi";

export default function Product({ product }) {
    const {
        product_title,
        ratting,
        is_available,
        price,
        image,
        category,
        slug,
        id,
    } = product || {};

    const { data: categoryData, isSuccess } = useGetCategoryQuery(category);
    let rattingContent = new Array(ratting).fill(0);

    return (
        <>
            {isSuccess && (
                <Card
                    className="w-[100%] h-fit bg-[#adbad2c5] shadow-2xl shadow-[#e1cfcf] rounded-lg p-1"
                    imgAlt={product_title}
                    imgSrc={image[0]?.image}>
                    {/* <div>
        <img src={image} alt="" />
      </div> */}
                    <Link to={`/products/${categoryData?.name}/${slug}/${id}`}>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {product_title}
                        </h5>
                    </Link>
                    <div className="mb-5 mt-2.5 flex items-center gap-3">
                        <div className="flex items-center">
                            {rattingContent.map(() => (
                                <svg
                                    key={Math.random()}
                                    className="h-5 w-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                {ratting}
                            </span>
                        </div>
                        <span className="text-sm text-[green] font-medium">
                            {is_available ? "স্টক" : "স্টক শেষ"}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {price}
                        </span>
                        <Link
                            to={`/products/${categoryData?.name}/${slug}/${id}`}
                            // style={{ background: "#fffce6", color: '#111' }} focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800
                            className="rounded-lg bg-[#fffce6] px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-[#fcf8db] duration-[.5s] transition-colors">
                            বিস্তারিত
                        </Link>
                    </div>
                </Card>
            )}
        </>
    );
}
