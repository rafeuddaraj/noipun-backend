import { useState } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { useGetProductsQuery } from "../../features/productSlice/productApi";
import { useSelector } from "react-redux";
import { accountSelector } from "../../features/accountSlice/accountSelector";

export default function Products() {
    const {user} = useSelector(accountSelector)
    const {email} = user || {}
    const { data, isSuccess } = useGetProductsQuery({email});
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleModal = () => setShowModal((prev) => !prev);
    const handleEditModal = () => setShowEditModal((prev) => !prev);
    return (
        <>
            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-full px-5 lg:px-20">
                    <div className="px-3 py-20 bg-opacity-10">
                        <div className="w-full flex">
                            <button
                                className="btn ml-auto"
                                onClick={handleModal}>
                                Add Product
                            </button>
                        </div>
                        <div className="overflow-x-auto mt-4">
                            <table className="divide-y-1 text-base divide-gray-600 w-full">
                                <thead>
                                    <tr>
                                        <th className="table-th">পণ্য</th>
                                        <th className="table-th">দাম</th>
                                        <th className="table-th">পরিমান</th>
                                        <th className="table-th">ওজন</th>
                                        <th className="table-th">ক্যাটাগরি</th>
                                        <th className="table-th">সক্রিয়</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-600/50">
                                    {isSuccess &&
                                        data?.results?.map((product) => (
                                            <Product
                                                key={product.id}
                                                product={product}
                                                handleEditModal={
                                                    handleEditModal
                                                }
                                                showEditModal={showEditModal}
                                            />
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {showModal && (
                <AddProduct handleModal={handleModal} showModal={showModal} />
            )}

            {showEditModal && (
                <EditProduct
                    handleEditModal={handleEditModal}
                    showEditModal={showEditModal}
                />
            )}
        </>
    );
}
