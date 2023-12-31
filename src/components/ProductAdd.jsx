// ProductAdd.jsx

import React, { useState } from 'react';

const ProductAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    sellerId: '',
    quantity: '',
    weight: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>

        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 mb-1">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600 mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-600 mb-1">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>

        {/* Seller ID */}
        <div className="mb-4">
          <label htmlFor="sellerId" className="block text-gray-600 mb-1">Seller ID</label>
          <input
            type="text"
            id="sellerId"
            name="sellerId"
            value={formData.sellerId}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-600 mb-1">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-600 mb-1">Weight</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600 mb-1">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
