import Banner from "../../Home/Banner/Banner.jsx";
import Brands from "../Brands/Brands.jsx";
import HowItWorks from "../Card/HowItWorks.jsx";
import ServiceCard from "../Card/ServiceCard.jsx";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <ServiceCard></ServiceCard>
           <Brands></Brands>
        </div>
    );
};

export default Home;