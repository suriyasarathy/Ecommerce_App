import React, { useState } from "react";
import ReactDom from "react-dom/client";
import "./index.css"
import { v4 as uuidv4 } from 'uuid';


const Header = () => {

    return (
        
        <>
            <div className="2xl:container bg-slate-600 h-20">
                <div className="w-[97%] mx-auto flex justify-between items-center h-[100%]">
                    <div>
                        LOGO
                    </div>
                    <ul className="flex space-x-5 bg-red-500 h-[100%] items-center">
                        <li>home</li>
                        <li>product</li>
                        <li>contast</li>
                        <li>viewcart</li>

                    </ul>
                </div>
            </div>
        </>
    )
}

const Cartlayout = () => {
   
let [ProductDateset,setProductDateset] =useState ([{
    "title": "sambar",
    id:1,
    "brand": "shirt",
    "rate": "350",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"


},
{
    "title": "sambar",
    id:2,
    "brand": "shirt",
    "rate": "450",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"

}, {
    "title": "sambar",
    id:3,
    "brand": "shirt",
    "rate": "350",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:4,
    "brand": "shirt",
    "rate": "5550",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:5,
    "brand": "shirt",
    "rate": "35400",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}
    , {
    "title": "sambar",
    id:6,
    "brand": "shirt",
    "rate": "800",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:7,
    "brand": "shirt",
    "rate": "67700",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:8,
    "brand": "shirt",
    "rate": "3000",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:9,
    "brand": "shirt",
    "rate": "2000",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:10,
    "brand": "shirt",
    "rate": "5000",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:11,
    "brand": "shirt",
    "rate": "34000",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:12,
    "brand": "shirt",
    "rate": "34000",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:13,
    "brand": "shirt",
    "rate": "5000",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:14,
    "brand": "shirt",
    "rate": "36500",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:15,
    "brand": "shirt",
    "rate": "34000",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:16,
    "brand": "shirt",
    "rate": "3600",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:17,
    "brand": "shirt",
    "rate": "36000",
    "descroption": "iuduvgdfi"
}, {
    "title": "sambar",
    id:18,
    "brand": "shirtdddd",
    "rate": "37000",
    "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
}, {
    "title": "sambar",
    id:19,
    "brand": "shirt",
    "rate": "44000",
    "descroption": "i2222222222222"
}])
    return (
        <>
            <div className=" w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 ">
                {
                    ProductDateset.map((e) => {
                        return (
                            <>
                                <div key={e.id} className="bg-slate-10 shadow-xl w-60 grid">
                                    <img className="w-full h-40 object-cover rounded-t-lg"  src="https://ik.imagekit.io/suriya/default-image.jpg?updatedAt=1700497073630" alt="cartimage"></img>
                                    <div className="text-lg font-bold">{e.title}</div>
                                    <div className="text-sm text-gray-600">{e.brand}</div>
                                    <div>{e.rate}</div>
                                    <div>{e.descroption}</div>
                                    <button className="bg-green-500 py-4 px-8">shop now</button>
                                </div>
                            </>
                        )


                    })}
            </div>


            {/* <div className="bg-slate-10 shadow-xl w-60 grid grid-cols-3 grid-flow-row grid-flow-row-dense">
            <img className="h-56" src="https://ik.imagekit.io/suriya/default-image.jpg?updatedAt=1700497073630" alt="cartimage"></img>
        <h1>{prop?.name}</h1>
        <p>{ prop?.rate}</p>
        <p>{prop?.descreption}</p>
        <button className="bg-green-500 py-4 px-8">shop now</button>
        
        </div> */}
        </>

    )
}
//destructure on fly
// const Cartlayout=({name,rate,descreption})=>{
//     return(
//         <>
//         <div className="bg-slate-10 shadow-xl w-60">
//             <img className="h-56" src="https://ik.imagekit.io/suriya/default-image.jpg?updatedAt=1700497073630" alt="cartimage"></img>
//         <h1>{name}</h1>
//         <p>{ rate}</p>
//         <p>{descreption}</p>
//         <button className="bg-green-500 py-4 px-8">shop now</button>

//         </div>
//         </>

//     )
// }
const BodyLayout = () => {

    let [ProductDateset,setProductDateset] =useState ([{
        "title": "sambar",
        id:1,
        "brand": "shirt",
        "rate": "350",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    
    
    },
    {
        "title": "sambar",
        id:2,
        "brand": "shirt",
        "rate": "450",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    
    }, {
        "title": "sambar",
        id:3,
        "brand": "shirt",
        "rate": "350",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:4,
        "brand": "shirt",
        "rate": "5550",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:5,
        "brand": "shirt",
        "rate": "35400",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }
        , {
        "title": "sambar",
        id:6,
        "brand": "shirt",
        "rate": "800",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:7,
        "brand": "shirt",
        "rate": "67700",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:8,
        "brand": "shirt",
        "rate": "3000",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:9,
        "brand": "shirt",
        "rate": "2000",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:10,
        "brand": "shirt",
        "rate": "5000",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:11,
        "brand": "shirt",
        "rate": "34000",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:12,
        "brand": "shirt",
        "rate": "34000",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:13,
        "brand": "shirt",
        "rate": "5000",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:14,
        "brand": "shirt",
        "rate": "36500",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:15,
        "brand": "shirt",
        "rate": "34000",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:16,
        "brand": "shirt",
        "rate": "3600",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:17,
        "brand": "shirt",
        "rate": "36000",
        "descroption": "iuduvgdfi"
    }, {
        "title": "sambar",
        id:18,
        "brand": "shirtdddd",
        "rate": "37000",
        "descroption": "iuduvguiiuaugdvidc;idgciywdcgi;u wdgfi"
    }, {
        "title": "sambar",
        id:19,
        "brand": "shirt",
        "rate": "44000",
        "descroption": "i2222222222222"
    }])
  

    return (
        <><div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto grid grid-cols-1 ">
                <div className="flex gap-4">
                    <button className="bg-green-500 py-4 px-3" onClick={()=>{
                        console.log("game");
                        const Productfilter = ProductDateset.filter((e,index)=>{
                            return e.rate>5000;
                       
                        })
                        setProductDateset(Productfilter)

                    }}> top rated search</button>

                    {console.log(filterData)}
                    <button className="bg-green-500 py-4 px-3"> top rate search</button>
                </div>
            </div>



            <Cartlayout />



        </div></>
    )
}

const Footer = () => {
    return (
        <>

            foot</>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <BodyLayout />
            <Footer />
        </>



    )
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />)