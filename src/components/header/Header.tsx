import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useState } from "react";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="header bg-[#003580] text-white flex justify-center relative">
      <div className="headerContainer container mx-auto w-full max-w-5xl mt-5 mb-[100px]">
        <div className="headerList flex items-center gap-10 mb-[50px] ">
          <div className="headerListItem active flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faBed} className="text-white" />
            <span>Stays</span>
          </div>
          <div className="headerListItem flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faPlane} className="text-white" />
            <span>Flights</span>
          </div>
          <div className="headerListItem flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faCar} className="text-white" />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faBed} className="text-white" />
            <span>Attractions</span>
          </div>
          <div className="headerListItem flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faTaxi} className="text-white" />
            <span>Airport taxis</span>
          </div>
        </div>
        <div>
          <h1 className="headerTitle text-white">
            A lifetime of discounts? It's Genius.
          </h1>
          <p className="headerDesc my-[20px] mx-0 text-white">
            Get rewarded for your travels – unlock instant savings of 10% or
            more with a free Lamabooking account
          </p>
          <button className="headerBtn bg-[#0071c2] text-white font-medium border-none p-[10px] cursor-pointer">
            Sign in / Register
          </button>

          <div className="headerSearch h-[60px] bg-white border-[3px] border-[#febb02] flex items-center justify-around py-[10px] rounded-[5px] absolute -bottom-[30px] w-full max-w-5xl ">
            <div className="headerSearchItem flex items-center gap-[10px]">
              <FontAwesomeIcon
                icon={faBed}
                className="headerIcon text-gray-400"
              />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput border-none outline-none"
              />
            </div>
            <div className="headerSearchItem flex items-center gap-[10px]">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="headerIcon text-gray-400"
              />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText text-gray-400 cursor-pointer"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date absolute top-[50px] z-10"
                />
              )}
            </div>

            <div className="headerSearchItem flex items-center gap-[10px]">
              <FontAwesomeIcon
                icon={faPerson}
                className="headerIcon text-gray-400"
              />
              <span className="headerSearchText text-gray-400 cursor-pointer">
                2 adults 2 children 1 room to date
              </span>
            </div>

            <div className="headerSearchItem flex items-center gap-[10px]">
              <button className="headerBtn bg-[#0071c2] text-white font-medium border-none p-[10px] cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
