import Banner from "../../Home/Banner/Banner.jsx";
import Brands from "../Brands/Brands.jsx";
import HowItWorks from "../Card/HowItWorks.jsx";
import ServiceCard from "../Card/ServiceCard.jsx";
import FAQ from "../FAQ/FAQ.jsx";
import Reviews from "../Reviews/Reviews.jsx";

const reviewsPromise = fetch('/reviews.json').then((res)=>res.json());

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowItWorks></HowItWorks>
           <ServiceCard></ServiceCard>
           <Brands></Brands>
           <Reviews reviewsPromise={reviewsPromise}></Reviews>
           <FAQ></FAQ>
           
        </div>
    );
};

export default Home;