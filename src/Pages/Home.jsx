import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ServiceCards from "../Components/ServiceCards";
import Courses from "./Courses";
import Social from "./Social";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ServiceCards></ServiceCards>
            <Courses></Courses>
            <Social></Social>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;