import { useState } from "react";
import Product from "../Products/Product";
import Sidebar from "./Sidebar";

export default function AllProduct() {
    return (
        <main className="mx-auto justify-center flex-grow max-w-[1400px] border-b py-5 lg:flex lg:flex-row lg:py-10">
            <Sidebar />
            <div>
                <div className="mb-5 flex justify-between px-5">
                    <div className="flex gap-3">
                        <button className="flex items-center justify-center border px-6 py-2">
                            Sort by
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mx-2 h-4 w-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>

                        <button className="flex items-center justify-center border px-6 py-2 md:hidden">
                            Filters
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="mx-2 h-4 w-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <section className="mx-auto gap-3 justify-center w-full grid max-w-[1200px] grid:cols-1 md:grid-cols-2 px-5 pb-10 lg:grid-cols-4">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </section>
            </div>
        </main>
    );
}
