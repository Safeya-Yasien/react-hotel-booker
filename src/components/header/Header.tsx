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
import { useNavigate } from "react-router";

const Header = ({ type }: { type: string }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (
    name: "adult" | "children" | "room",
    operation: "i" | "d"
  ) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header bg-[#003580] text-white flex justify-center relative">
      <div
        className={`${
          type === "list" ? "mb-0" : ""
        } headerContainer container mx-auto w-full max-w-5xl mt-5 mb-[100px]`}
      >
        <div className="flex items-center gap-10 mb-[50px]">
          {[
            { icon: faBed, label: "Stays" },
            { icon: faPlane, label: "Flights" },
            { icon: faCar, label: "Car rentals" },
            { icon: faBed, label: "Attractions" },
            { icon: faTaxi, label: "Airport taxis" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-[10px] cursor-pointer"
            >
              <FontAwesomeIcon icon={item.icon} className="text-white" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {type !== "list" && (
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
                  className="headerSearchInput border-none outline-none text-black"
                  onChange={(e) => setDestination(e.target.value)}
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
                    onChange={(item) =>
                      setDate([
                        {
                          startDate: item.selection.startDate || new Date(),
                          endDate: item.selection.endDate || new Date(),
                          key: "selection",
                        },
                      ])
                    }
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date absolute top-[50px] z-30"
                  />
                )}
              </div>

              <div className="headerSearchItem flex items-center gap-[10px]">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headerIcon text-gray-400"
                />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText text-gray-400 cursor-pointer"
                >
                  2 adults 2 children 1 room to date
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options z-30 absolute top-[50px] bg-white text-gray-400 rounded-[5px] shadow-lg ">
                    <div className="optionItem w-[200px] flex justify-between m-[10px]">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter flex items-center gap-[10px] text-xs text-black">
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                          className="optionCounterButton w-[30px] h-[30px] border border-[#0071c2] text-[#0071c2] cursor-pointer bg-white"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          onClick={() => handleOption("adult", "i")}
                          className="optionCounterButton w-[30px] h-[30px] border border-[#0071c2] text-[#0071c2] cursor-pointer bg-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem w-[200px] flex justify-between m-[10px]">
                      <span className="optionText">Children</span>
                      <div className="optionCounter flex items-center gap-[10px] text-xs text-black">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className="optionCounterButton w-[30px] h-[30px] border border-[#0071c2] text-[#0071c2] cursor-pointer bg-white"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="optionCounterButton w-[30px] h-[30px] border border-[#0071c2] text-[#0071c2] cursor-pointer bg-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem w-[200px] flex justify-between m-[10px]">
                      <span className="optionText">Room</span>
                      <div className="optionCounter flex items-center gap-[10px] text-xs text-black">
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                          className="optionCounterButton w-[30px] h-[30px] border border-[#0071c2] text-[#0071c2] cursor-pointer bg-white"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          onClick={() => handleOption("room", "i")}
                          className="optionCounterButton w-[30px] h-[30px] border border-[#0071c2] text-[#0071c2] cursor-pointer bg-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem flex items-center gap-[10px]">
                <button
                  onClick={handleSearch}
                  className="headerBtn bg-[#0071c2] text-white font-medium border-none p-[10px] cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
