import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Header;
