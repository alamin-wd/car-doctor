import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import About from "../../About/About";
import ChooseUs from "../ChooseUs/ChooseUs";
import { SlCalender } from "react-icons/sl";
import { MdPermPhoneMsg } from "react-icons/md";
import { PiMapPinAreaBold } from "react-icons/pi";
import TestimonialCard from "../TestimonialCard/TestimonialCard";


const Home = () => {

    return (

        <div>

            <Helmet>
                <title>
                    Home - Car Doctor
                </title>
            </Helmet>

            <Banner></Banner>

            {/* About Us Section */}
            <div className="my-20">
                <About></About>
            </div>

            {/* Extra Section */}
            <div className="bg-[#151515] flex flex-col md:flex-row justify-between items-center my-10 p-20 rounded-lg ">
                <div className="flex items-center gap-5 text-white">

                    <SlCalender className="text-5xl text-[#FF3811]" />

                    <div>
                        <p className="font-medium">We are open monday-friday</p>
                        <h4 className="text-2xl font-bold">7:00 am - 9:00 pm</h4>
                    </div>
                </div>

                <div className="flex items-center gap-5 text-white">

                    <MdPermPhoneMsg className="text-5xl text-[#FF3811]" />

                    <div>
                        <p className="font-medium">Have a question?</p>
                        <h4 className="text-2xl font-bold">+2546 251 2658</h4>
                    </div>
                </div>

                <div className="flex items-center gap-5 text-white">

                    <PiMapPinAreaBold className="text-5xl text-[#FF3811]" />

                    <div>
                        <p className="font-medium">Need a repair? our address</p>
                        <h4 className="text-2xl font-bold">Liza Street, New York</h4>
                    </div>
                </div>

            </div>

            {/* Why Choose Us Section */}
            <div className="my-10">
                <div className="w-1/2 mx-auto text-center space-y-4">
                    <h5 className="text-lg text-[#FF3811]">Core Features</h5>

                    <h3 className="text-3xl md:text-5xl text-[#151515] font-bold">Why Choose Us</h3>

                    <p className="text-[#737373]">
                        The majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.
                    </p>
                </div>

                <ChooseUs></ChooseUs>

            </div>

            {/* Testimonial Section */}
            <div className="my-10">
                <div className="w-1/2 mx-auto text-center space-y-4">
                    <h5 className="text-lg text-[#FF3811]">Testimonial</h5>

                    <h3 className="text-3xl md:text-5xl text-[#151515] font-bold">What Customer Says</h3>

                    <p className="text-[#737373]">
                        The majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.
                    </p>
                </div>

                <div className="mt-10">
                    <TestimonialCard></TestimonialCard>
                </div>

            </div>

        </div>
    );
};

export default Home;