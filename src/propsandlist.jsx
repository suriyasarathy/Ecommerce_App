import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = () => {
    return (
        <div className="2xl:container bg-slate-600 h-20">
            <div className="w-[97%] mx-auto flex justify-between items-center h-[100%]">
                <div>
                    LOGO
                </div>
                <ul className="flex space-x-5 bg-red-500 h-[100%] items-center">
                    <li>home</li>
                    <li>product</li>
                    <li>contact</li>
                    <li>viewcart</li>
                </ul>
            </div>
        </div>
    );
};

const ProductDataset = () => [
    {
        "title": "sambar",
        "brand": "shirt",
        "rate": "3.000",
        "description": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    },
    {
        "title": "masala dosa",
        "brand": "food",
        "rate": "4.000",
        "description": "Delicious masala dosa with spicy potato filling."
    },
    // ...other products
];

const CartLayout = () => {
    const products = ProductDataset();
    return (
        <>
            {products.map((product, index) => (
                <div key={index} className="bg-slate-100 shadow-xl w-60 m-4 p-4">
                    <img
                        className="h-56"
                        src="https://ik.imagekit.io/suriya/default-image.jpg?updatedAt=1700497073630"
                        alt="product"
                    />
                    <h1>{product.title}</h1>
                    <p>{product.rate}</p>
                    <p>{product.description}</p>
                    <button className="bg-green-500 py-2 px-4 mt-2">Shop Now</button>
                </div>
            ))}
        </>
    );
};

const BodyLayout = () => {
    return (
        <div className="flex flex-wrap">
            <CartLayout />
        </div>
    );
};

const Footer = () => {
    return (
        <div className="bg-slate-600 text-white p-4 text-center">
            Footer content
        </div>
    );
};

const AppLayout = () => {
    return (
        <>
            <Header />
            <BodyLayout />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
3