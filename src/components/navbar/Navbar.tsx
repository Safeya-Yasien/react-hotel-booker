const Navbar = () => {
  return (
    <div className="navbar h-[50px] bg-[#003580] flex justify-center text-white ">
      <div className="container w-full max-w-[1024px] flex items-center justify-between">
        <span className="logo font-medium">lamabooking</span>
        <div className="navItems flex items-center gap-5">
          <button className="navButton border-none px-[10px] py-[5px] text-[#003580] cursor-pointer bg-white">
            Register
          </button>
          <button className="navButton border-none px-[10px] py-[5px] text-[#003580] cursor-pointer bg-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
