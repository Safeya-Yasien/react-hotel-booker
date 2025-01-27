const MailList = () => {
    return (
      <div className="w-full mt-12 bg-[#003580] text-white flex flex-col items-center gap-5 py-12">
        <h1 className="text-3xl font-semibold">Save time, save money!</h1>
        <span className="text-lg">Sign up and we'll send the best deals to you</span>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Your Email"
            className="w-[300px] h-[30px] p-2 border-none mr-2 rounded-md"
          />
          <button className="h-[50px] bg-[#0071c2] text-white font-medium rounded-md cursor-pointer flex items-center justify-center px-4">
            Subscribe
          </button>
        </div>
      </div>
    );
  };
  
  export default MailList;
  