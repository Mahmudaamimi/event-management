import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ServiceCards from "../Components/ServiceCards";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ServiceCards></ServiceCards>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;