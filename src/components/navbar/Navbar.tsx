const Navbar = () => {
  return (
    <div className="navbar h-[50px] bg-[#003580] flex justify-center ">
      <div className="container w-full max-w-[1024px] text-white flex items-center justify-between">
        <span className="logo font-medium">lamabooking</span>
        <div className="navItems">
          <button className="navButton border-none px-[10px] py-[5px] text-[#003580] cursor-pointer">
            Register
          </button>
          <button className="navButton border-none px-[10px] py-[5px] text-[#003580] cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
