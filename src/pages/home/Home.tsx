import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type="" />
      <div className="homeContainer mt-[50px] flex flex-col items-center gap-[30px] ">
        <Featured />{" "}
     
        <h1 className="homeTitle max-w-5xl text-[20px]">Browse by property type</h1>
         <PropertyList />
        <h1 className="homeTitle max-w-5xl text-[20px]">Homes guests love</h1>
         <FeaturedProperties />
       {/*    <MailList />
        <Footer />*/}
      </div>
    </div>
  );
};
export default Home;
