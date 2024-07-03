import { Helmet } from "react-helmet-async";
import person from "../../../src/assets/images/about_us/person.jpg";
import parts from "../../../src/assets/images/about_us/parts.jpg";

const About = () => {

    return (

        <div className="w-11/12 mx-auto border border-white">

            <Helmet>
                <title>About - Car Doctor</title>
            </Helmet>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-10 mb-20">

                <div className="lg:w-1/2 relative ">
                    <img className="w-full md:w-3/4 h-[380px] rounded-lg"
                    src={person} alt="" />

                    <span className="absolute w-1/2 md:w-3/5 h-[400] top-3/4 md:top-1/2 left-48 md:left-44 border-8 border-white rounded-lg">
                        <img className="w-full " src={parts} alt="" />
                    </span>
                </div>

                <div className="lg:w-1/2 text-center md:text-left space-y-6 ">
                    <h5 className="text-2xl text-[#FF3811] font-semibold">About Us</h5>

                    <h3 className="text-3xl md:text-5xl text-[#151515] font-bold">We are qualified & of experience in this field</h3>

                    <p className="text-[#737373] text-left">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.
                    </p>

                    <p className="text-[#737373] text-left">
                        the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.
                    </p>

                    <button className="bg-[#FF3811] hover:bg-[#d23111] text-white text-lg font-medium mt-6 px-4 py-2 rounded-lg">
                        Get More Info
                    </button>
                </div>

            </div>
        </div>
    );
};

export default About;