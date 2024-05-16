import React, { useState } from 'react';
import Img1 from '../images/product1.webp';
import Img2 from '../images/product2.jpg';
import Img3 from '../images/product3.webp';
import Img4 from '../images/product4.jpg';
import Img5 from '../images/product5.jpg';
import Img6 from '../images/product6.jpg';

// Sample product data
const products = [
  { title: 'Thermal Massage Bed', imageUrl: Img1, description: 'A premium thermal massage bed for relaxation.' },
  { title: 'White Gold Mat', imageUrl: Img2, description: 'An advanced mat for therapeutic use.' },
  { title: 'White Gold Fold Mat', imageUrl: Img3, description: 'A foldable mat for easy storage and use.' },
  { title: 'Whigo Health Belt', imageUrl: Img4, description: 'A health belt to support your lower back.' },
  { title: 'Heating Waist Belt', imageUrl: Img5, description: 'A heating belt to soothe your waist.' },
  { title: 'Eye Cover', imageUrl: Img6, description: 'A comfortable eye cover for better sleep.' },
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [form, setForm] = useState({ name: '', dateTime: '' });

  const handleBookClick = (product) => {
    setSelectedProduct(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking details:', form);
    // Close the dialog after booking
    setSelectedProduct(null);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#E8F1FF]">
      <div className="w-full flex flex-col gap-7 items-center justify-center">
        <span className="text-3xl font-black text-black mt-10">Products</span>
        <p className="text-lg text-center text-black">
          We Provide World Class Product with Free Experience. 30 Authorized
          Centers in Gujarat, Rajasthan, Punjab & Maharashtra.
        </p>
      </div>
      <div className="h-full w-full px-10 py-20">
        <div className="grid grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full bg-[#2AA7FF] flex flex-col justify-between items-center text-black rounded-xl p-6"
            >
              {/* Title */}
              <h2 className="text-xl font-bold mb-2 text-white">{product.title}</h2>
              {/* Button */}
              <button
                onClick={() => handleBookClick(product)}
                className="bg-white text-black px-10 mt-4 py-2 rounded-md mb-2"
              >
                Book
              </button>
              {/* Divider */}
              <div className="w-full h-1 bg-white mb-2"></div>
              {/* Image */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dialog Box */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">{selectedProduct.title}</h2>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.title} className="object-cover mb-4" />
            <p className="mb-4">{selectedProduct.description}</p>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="dateTime">Time with Date</label>
              <input
                id="dateTime"
                name="dateTime"
                type="datetime-local"
                value={form.dateTime}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <button
              onClick={handleBooking}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
