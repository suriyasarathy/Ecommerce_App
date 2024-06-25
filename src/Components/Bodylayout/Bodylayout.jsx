import { useEffect, useState } from "react";
import Cartlayout from "../Cardlayout/Cardlayout";
import Loading from "../Loading/Loading";

const Bodylayout = () => {
  const [filterData, setFilterData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const fetchData = async () => {
    setIsloading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllData(data);
      setFilterData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return <><Loading/></>;
  } else {
    return (
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <div className="flex gap-4">
            <button
              className="bg-green-500 py-4 px-3"
              onClick={() => {
                const Productfilter = allData.filter((e) => {
                  return e.price > 500;
                });
                setFilterData(Productfilter);
              }}
            >
              Top Rated Search
            </button>
            <button
              className="bg-green-500 py-4 px-3"
              onClick={() => {
                setFilterData(allData);
              }}
            >
              ALL
            </button>

            <button className="bg-green-500 py-4 px-3">Another Search</button>
          </div>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {filterData.map((e) => (
            <Cartlayout
              key={e.id}
              title={e.title}
              id={e.id}
              img={e.image}
              brand={e.category}
              rate={e.price}
              description={e.description}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Bodylayout;
