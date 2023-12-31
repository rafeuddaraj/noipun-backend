import React, { useEffect, useState } from "react";
import {
    useGetProductQuery,
    useProductImageAddMutation,
    useUpdateProductMutation,
} from "../../features/productSlice/productApi";
import { useGetCategoriesQuery } from "../../features/categorySlice/categoryApi";
import { useSelector } from "react-redux";
import { productSelector } from "../../features/productSlice/productSelector";
import convertToBanglaNumber from "../../utils/convertToBanglaNumber";

const initialInput = {
    product_title: "",
    description: "",
    price: "",
    is_available: "",
    delivery_is_free: "",
    weight: "",
    seller_id: "",
    category: "",
    quantity: "",
};

export default function AddProduct({ showEditModal, handleEditModal }) {
    const [input, setInput] = useState(initialInput);
    const { productId } = useSelector(productSelector);

    const { data: product, isSuccess: isSuccessProduct } =
        useGetProductQuery(productId);
    const [updateProductServer, { isLoading: isAddVideoLoading }] =
        useUpdateProductMutation();
    const { data: categories, isSuccess: isSuccessCategory } =
        useGetCategoriesQuery();

    useEffect(() => {
        if (isSuccessProduct) {
            setInput((prev) => ({ ...prev, ...product }));
        }
    }, [isSuccessProduct, product]);

    const handleInput = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const slug = createSlug(banglaToBanglish(input.product_title));
        const data = {
            ...input,
            delivery_is_free: false,
            category: parseInt(input.category),
            total_buyed: 0,
        };
        updateProductServer({ id: productId, data });
        handleEditModal();
    };

    const handleChange = (index, file) => {
        const maxSizeKB = 400;
        const minSizeKB = 40;

        if (file) {
            const fileSizeKB = file.size / 1024;

            if (fileSizeKB >= minSizeKB && fileSizeKB <= maxSizeKB) {
                const newFields = [...fields];
                newFields[index].file = file;
                setFields(newFields);
            } else {
                alert("Please select an image between 40KB and 400KB.");
            }
        }
    };

    const [productImageAddServer, { isSuccess }] = useProductImageAddMutation();
    const [fields, setFields] = useState([{ file: null, url: "", id: 1 }]);
    const [imageUploadDoneOnce, setImageUploadDoneOnce] = useState(true);

    const handleAddField = () => {
        setFields([...fields, { file: null, url: "", id: fields.length + 1 }]);
    };

    const handleRemoveField = (id) => {
        const newFields = fields.filter((field) => field.id !== id);
        setFields(newFields);
    };
    const handleImageUpload = async (file, index) => {
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);
        try {
            const image = await productImageUploadServer(formData);
            dispatch(addImage(image.data.data.display_url));
            setImageUploadDoneOnce(false);
        } catch {
            //
        }

        // dispatch(addImage(formData));
    };

    let imageContent = null;

    if (product?.image?.length > 0) {
        imageContent = (
            <React.Fragment key={Math.random()}>
                {product?.image?.map((image, i) => {
                    return (
                        <div key={image.image_id}>
                            <label
                                htmlFor="weight"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                ইমেজ {convertToBanglaNumber(i + 1)}
                            </label>
                            <input
                                name="weight"
                                id="weight"
                                type="text"
                                readOnly
                                value={image.image}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }

    return (
        <>
            <div
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden="true"
                className={`${
                    !showEditModal && "hidden"
                } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                style={{ background: "rgba(0,0,0,0.5)" }}>
                <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                পণ্য আপডেট করুন
                            </h3>
                            <button
                                onClick={handleEditModal}
                                type="button"
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="authentication-modal">
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-4 md:p-5">
                            <form
                                className="space-y-4"
                                action="#"
                                onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        পণ্যের নাম
                                    </label>
                                    <input
                                        type="text"
                                        name="product_title"
                                        id="title"
                                        value={input.product_title}
                                        onChange={handleInput}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        পণ্যের বিবরণ
                                    </label>
                                    <textarea
                                        value={input.description}
                                        name="description"
                                        id="description"
                                        onChange={handleInput}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        দাম
                                    </label>
                                    <input
                                        value={input.price}
                                        name="price"
                                        type="number"
                                        id="price"
                                        onChange={handleInput}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        পরিমান
                                    </label>
                                    <input
                                        value={input.quantity}
                                        name="quantity"
                                        type="number"
                                        id="quantity"
                                        onChange={handleInput}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="weight"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        ওজন
                                    </label>
                                    <input
                                        name="weight"
                                        id="weight"
                                        type="number"
                                        onChange={handleInput}
                                        value={input.weight}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                    <input
                                        id="is_available"
                                        type="checkbox"
                                        checked={input.is_available}
                                        onChange={(e) =>
                                            setInput((prev) => ({
                                                ...prev,
                                                is_available: e.target.checked,
                                            }))
                                        }
                                        name="is_available"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="is_available"
                                        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        স্টকে আছে
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="category"
                                        className="block text-gray-600 mb-1">
                                        ক্যাটাগরি
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        onChange={(e) =>
                                            setInput((prev) => ({
                                                ...prev,
                                                [e.target.name]: e.target.value,
                                            }))
                                        }
                                        value={input.category}
                                        className="w-full border rounded py-2 px-3"
                                        required>
                                        <option value="" disabled>
                                            প্রডাক্টের ক্যাটাগরি যুক্ত করুন
                                        </option>
                                        {isSuccessCategory &&
                                            categories.map((category) => {
                                                return (
                                                    <option
                                                        key={category.id}
                                                        value={category.id}>
                                                        {category.name}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </div>

                                {/* Images */}

                                {imageContent}

                                {/* <div>
                                    {fields.map((field, index) => (
                                        <div key={field.id} className="mb-4">
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                htmlFor={`${field.id}`}>
                                                Upload file
                                            </label>
                                            <input
                                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                aria-describedby="file_input_help"
                                                id={`${field.id}`}
                                                type="file"
                                                accept=".jpg, .jpeg, .png"
                                                onChange={(e) =>
                                                    handleChange(
                                                        index,
                                                        e.target.files[0]
                                                    )
                                                }
                                            />
                                            <p
                                                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                                id="file_input_help">
                                                PNG, JPG (MAX. 640x640px).
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveField(field.id)
                                                }
                                                className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
                                                Remove
                                            </button>
                                            {field.url && (
                                                <img
                                                    src={field.url}
                                                    alt={`Image ${index + 1}`}
                                                    className="mt-2"
                                                />
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            imageUploadDoneOnce
                                                ? handleAddField()
                                                : alert(
                                                      "আপনি আর নতুন কোনো ইমেজ ফিল্ড অ্যাড করতে পারবেন না"
                                                  )
                                        }
                                        className="px-4 py-2 bg-green-500 text-white rounded">
                                        Add Image Field
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            imageUploadDoneOnce
                                                ? fields.forEach(
                                                      (field, index) =>
                                                          handleImageUpload(
                                                              field.file,
                                                              index
                                                          )
                                                  )
                                                : alert(
                                                      "আপনি আর ইমেজ আপলোড করতে পারবেন না।"
                                                  )
                                        }
                                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
                                        Update Images
                                    </button>
                                </div> */}
                                {/* Images End */}

                                <button
                                    style={{ background: "#34b5fd" }}
                                    type="submit"
                                    disabled={isAddVideoLoading}
                                    className="w-full text-dark hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
