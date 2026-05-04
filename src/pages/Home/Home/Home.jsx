import Banner from "../../Home/Banner/Banner.jsx";
import Brands from "../Brands/Brands.jsx";
import HowItWorks from "../Card/HowItWorks.jsx";
import ServiceCard from "../Card/ServiceCard.jsx";
import FAQ from "../FAQ/FAQ.jsx";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <ServiceCard></ServiceCard>
           <Brands></Brands>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;