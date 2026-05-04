import Banner from "../../Home/Banner/Banner.jsx";
import HowItWorks from "../Card/HowItWorks.jsx";
import ServiceCard from "../Card/ServiceCard.jsx";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <ServiceCard></ServiceCard>
        </div>
    );
};

export default Home;