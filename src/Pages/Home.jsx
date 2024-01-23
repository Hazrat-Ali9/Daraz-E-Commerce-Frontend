import Carousel from "./Carousel";
import ClientSay from "./ClientSay";
import Offer from "./Offer";
import Partner from "./Partner";
import Products from "./Products";




const Home = () => {
    return (
        <div>
           <Carousel/>
           <Offer/>
        <Products/>
        <Partner/>
        <ClientSay/>
        </div>
    );
};

export default Home;