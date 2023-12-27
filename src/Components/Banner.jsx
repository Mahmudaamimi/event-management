 
import bannerImage from '../assets/1.jpg';
 const Banner = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bannerImage})`,
    };

    return (
        <div className="hero min-h-screen" style={backgroundImageStyle}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h3 className="mb-6 md:text-3xl font-bold">Education Community Living Las Vegas, Nevada</h3>
                    <p className="mb-5">
                        Education is a residential service that provides support to adults and children who need assistance with daily living due to developmental, cognitive, or intellectual disability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
