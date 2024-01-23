import { Outlet} from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";

const Main = () => {
   
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet> 
            
            <Footer/>
        </div>
    );
};

export default Main;