const SearchItem = () => {
  return (
    <div className="searchItem border border-gray-400 p-2.5 rounded-[5px] flex justify-between gap-5 mb-5">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg w-[200px] h-[200px] object-cover"
      />
      <div className="siDesc flex flex-col gap-2.5 flex-2">
        <h1 className="siTitle text-[20px] text-[#0071c2]">
          Tower Street Apartments
        </h1>
        <span className="siDistance text-xs">500m from center</span>
        <span className="siTaxiOp text-xs bg-[#008009] text-white w-max p-[3px] rounded-[5px]">
          Free airport taxi
        </span>
        <span className="siSubtitle text-xs font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures text-xs">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp text-xs text-[#008009] font-bold">
          Free cancellation
        </span>
        <span className="siCancelOpSubtitle text-xs text-[#008009]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails flex-1 flex flex-col justify-between">
        <div className="siRating flex justify-between">
          <span className="font-medium">Excellent</span>
          <button className="bg-[#003580] text-white p-[5px] font-bold border-none">
            8.9
          </button>
        </div>
        <div className="siDetailTexts text-right flex flex-col gap-[5px]">
          <span className="siPrice text-2xl">$112</span>
          <span className="siTaxOp text-xs text-gray-500">
            Includes taxes and fees
          </span>
          <button className="siCheckButton bg-[#0071c2] text-white font-bold px-[10px] py-[5px] rounded-[5px] cursor-pointer border-none">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
