import React from 'react';
import bannerImage from '../assets/banner-1.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${bannerImage})`,
    };

    return (
        <div className="hero min-h-screen" style={backgroundImageStyle}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h3 className="mb-6 md:text-3xl font-bold">Educare Community Living – Las Vegas, Nevada</h3>
                    <p className="mb-5">
                        Educare is a residential service that provides support to adults and children who need assistance with daily living due to developmental, cognitive, or intellectual disability.
                    </p>
                    <Link to='/register'>
                    <button className="bg-green-500 px-8 py-3 rounded-sm font-semibold">Registation Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
