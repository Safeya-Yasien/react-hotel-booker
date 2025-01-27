import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-screen-lg flex gap-5">
          <div className="listSearch flex-1 bg-[#febb02] p-[10px] rounded-[10px] sticky top-[10px] h-max">
            <h1 className="text-xl text-[#555] mb-2">Search</h1>
            <div className="lsItem mb-4">
              <label className="text-xs">Destination</label>
              <input
                placeholder={destination}
                type="text"
                className="w-full h-8 border-none p-2"
              />
            </div>
            <div className="lsItem mb-4">
              <label className="text-xs">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="h-[30px] p-[5px] bg-white flex items-center cursor-pointer"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="lsItem mb-4">
              <label className="text-xs">Options</label>
              <div className="p-[10px] lsOptions">
                <div className="lsOptionItem flex justify-between mb-[10px] text-[#555] text-xs">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput w-12 h-8 border-none p-2"
                  />
                </div>
                <div className="flex justify-between mb-2 text-[#555] text-xs">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="w-12 h-8 border-none p-2" />
                </div>
                <div className="flex justify-between mb-2 text-[#555] text-xs">
                  <span>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-12 h-8 border-none p-2"
                    placeholder={options.adult}
                  />
                </div>
                <div className="flex justify-between mb-2 text-[#555] text-xs">
                  <span>Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput w-12 h-8 border-none p-2"
                    placeholder={options.children}
                  />
                </div>
                <div className="flex justify-between mb-2 text-[#555] text-xs">
                  <span>Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-12 h-8 border-none p-2"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="w-full py-2 bg-[#0071c2] text-white font-semibold cursor-pointer">
              Search
            </button>
          </div>

          <div className="flex-3">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
