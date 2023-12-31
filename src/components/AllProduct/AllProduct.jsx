// import { useState } from "react";
import { useGetProductsQuery } from "../../features/productSlice/productApi";
import Product from "../Products/Product";
import Sidebar from "./Sidebar";

export default function AllProduct() {
    const {data:products,isLoading,isSuccess} = useGetProductsQuery()
    const {results} = products || {}

    let content = null

    if(isSuccess && results?.length > 0 ){
        content =  results?.map(product=><Product key={product.id} product={product} />)
    }

    return (
        <main className="mx-auto justify-center flex-grow max-w-[1400px] border-b py-5 flex xl:flex-row lg:flex-row min-[300px]:flex-col lg:py-10">
            <Sidebar />
            <div>
                <div className="mb-5 flex justify-between px-5 mt-5">
                    <div className="flex gap-3">
                        {/* <label htmlFor="countries" className="block mb-2 text-sm font-medium">Sort By</label> */}
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Sort By</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>


                        {/* <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter</label> */}
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Filter</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>

                    </div>
                </div>

                <section className="mx-auto gap-3 justify-center w-full grid max-w-[1200px] xl:grid-cols-4 lg:grid-cols-3 min-[300px]:grid-cols-1 px-5 pb-10">
                    {content}
                </section>
            </div>
        </main>
    );
}
