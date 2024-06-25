const Header = () => {
  return (
    <>
      <div className="2xl:container bg-slate-600 h-20">
        <div className="w-[97%] mx-auto flex justify-between items-center h-[100%]">
          <div>LOGO</div>
          <ul className="flex space-x-5 bg-red-500 h-[100%] items-center">
            <li>home</li>
            <li>product</li>
            <li>contast</li>
            <li>viewcart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header
