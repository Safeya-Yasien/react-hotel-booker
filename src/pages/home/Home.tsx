import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type="" />
      <div className="homeContainer mt-[50px] flex flex-col items-center gap-[30px] ">
        <Featured />{" "}
        {/*  
        <h1 className="homeTitle max-w-5xl text-[20px]">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />*/}
      </div>
    </div>
  );
};
export default Home;
