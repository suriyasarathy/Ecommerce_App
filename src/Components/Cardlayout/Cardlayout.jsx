const Cartlayout = ({ title, id, img, brand, rate, description }) => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 pt-5">
      <div
        key={id}
        className="bg-white shadow-xl w-full md:w-96 rounded-lg overflow-hidden mx-auto"
      >
        <div className="flex items-center justify-center bg-gray-200">
          <img className="w-full h-64 object-cover" src={img} alt="cartimage" />
        </div>
        <div className="px-5 py-4">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-2">{brand}</p>
          <p className="text-lg font-semibold text-green-500 mb-4">${rate}</p>
          <p className="text-sm text-gray-700 mb-4">{description}</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartlayout;
