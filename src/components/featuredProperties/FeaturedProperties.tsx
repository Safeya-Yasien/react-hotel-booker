const FeaturedProperties = () => {
  return (
    <div className="flex gap-5 w-full max-w-screen-lg">
      <div className="flex-1 gap-2 flex flex-col">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-64 object-cover"
        />
        <span className="font-bold text-gray-800">Aparthotel Stare Miasto</span>
        <span className="font-light">Madrid</span>
        <span className="font-medium">Starting from $120</span>
        <div className="flex items-center gap-2">
          <button className="bg-[#003580] text-white p-1 font-bold">
            {8.9}
          </button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>
      <div className="flex-1 gap-2 flex flex-col">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-64 object-cover"
        />
        <span className="font-bold text-gray-800">Comfort Suites Airport</span>
        <span className="font-light">Austin</span>
        <span className="font-medium">Starting from $140</span>
        <div className="flex items-center gap-2">
          <button className="bg-[#003580] text-white p-1 font-bold">
            {9.3}
          </button>
          <span className="text-sm">Exceptional</span>
        </div>
      </div>
      <div className="flex-1 gap-2 flex flex-col">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-64 object-cover"
        />
        <span className="font-bold text-gray-800">Four Seasons Hotel</span>
        <span className="font-light">Lisbon</span>
        <span className="font-medium">Starting from $99</span>
        <div className="flex items-center gap-2">
          <button className="bg-[#003580] text-white p-1 font-bold">
            {8.8}
          </button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>
      <div className="flex-1 gap-2 flex flex-col">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-64 object-cover"
        />
        <span className="font-bold text-gray-800">Hilton Garden Inn</span>
        <span className="font-light">Berlin</span>
        <span className="font-medium">Starting from $105</span>
        <div className="flex items-center gap-2">
          <button className="bg-[#003580] text-white p-1 font-bold">
            {8.9}
          </button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
