const HomePageSkeleton = () => {
  return (
    <>
      <div className="navbar skeleton rounded-none h-[4rem] fixed top-0 z-10"></div>
      <div className="flex">
        <div className="sidebar w-1/6 rounded-none p-5 mt-[4rem] flex flex-col justify-between">
          <ul className="flex flex-col gap-3">
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
            <li className="w-full h-[50px] skeleton"></li>
          </ul>
          <div className="w-full h-[50px] skeleton relative -top-[1rem]"></div>
        </div>
        <div className="homepage w-5/6 h-screen rounded-none">
          <div className="carousel skeleton w-full rounded-none h-[400px]"></div>
        </div>
      </div>
    </>
  );
};

export default HomePageSkeleton;
