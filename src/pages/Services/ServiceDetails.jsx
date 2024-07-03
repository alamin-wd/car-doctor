import { Helmet } from "react-helmet-async";
import servicePageBanner from "../../assets/images/checkout/checkout.png";
import { FaArrowRight } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import logo from "/logo2.svg";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";


const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    const service = useLoaderData();

    const { _id, title, img, description, facility, price } = service;

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (

        <div className="w-11/12 mx-auto my-10">

            <Helmet>
                <title>Service Details - Services - Car Doctor</title>
            </Helmet>

            {/* Page Banner */}
            <div className="relative w-full">
                <img className="w-full" src={servicePageBanner} />

                <div className="w-full absolute top-0 bg-gradient-to-r from-[#151515] to-[#151515]... flex items-center h-full rounded-lg">

                    <div className="w-full text-center">
                        <h2 className="text-3xl md:text-5xl text-white font-bold">Service Details</h2>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-0 inset-x-10 breadcrumbs text-sm md:bg-[#FF3811] w-1/2 md:w-1/6 mx-auto">
                    <ul className="mx-5 text-white">
                        <li><a>Home</a></li>
                        <li><a>Service Details</a></li>
                    </ul>
                </div>
            </div>

            {/* Service Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 items-start my-10">

                {/* Left Side */}
                <div className="col-span-2 space-y-6">
                    <img className="w-full rounded-lg"
                        src={img} alt="Service item photo" />

                    <h3 className="text-[#151515] text-3xl font-bold">{title}</h3>

                    <p className="text-[#737373]">{description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#F3F3F3] border-t-2 border-t-[#FF3811] rounded-lg p-10">
                            <h4 className="text-[#444444] text-lg font-bold">{facility[0].name}</h4>

                            <p className="text-[#737373] mt-2">{facility[0].details}</p>
                        </div>

                        <div className="bg-[#F3F3F3] border-t-2 border-t-[#FF3811] rounded-lg p-10">
                            <h4 className="text-[#444444] text-lg font-bold">{facility[1].name}</h4>

                            <p className="text-[#737373] mt-2">{facility[1].details}</p>
                        </div>

                        <div className="bg-[#F3F3F3] border-t-2 border-t-[#FF3811] rounded-lg p-10">
                            <h4 className="text-[#444444] text-lg font-bold">{facility[2].name}</h4>

                            <p className="text-[#737373] mt-2">{facility[2].details}</p>
                        </div>

                        <div className="bg-[#F3F3F3] border-t-2 border-t-[#FF3811] rounded-lg p-10">
                            <h4 className="text-[#444444] text-lg font-bold">{facility[3].name}</h4>

                            <p className="text-[#737373] mt-2">{facility[3].details}</p>
                        </div>
                    </div>

                    <h3 className="text-[#151515] text-3xl font-bold">3 Simple Steps to Process</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="border-t-2 border-t-[#E8E8E8] text-center rounded-lg p-8">

                            <button className="btn btn-circle p-2 w-[70px] h-[65px] bg-[#FF38111A]">
                                <span className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] text-white font-bold">
                                    01
                                </span>
                            </button>

                            <h4 className="text-[#444444] text-lg font-bold mt-3">STEP ONE</h4>

                            <p className="text-[#737373] mt-2">It uses a dictionary of over 200.</p>
                        </div>

                        <div className="border-t-2 border-t-[#E8E8E8] text-center rounded-lg p-8">

                            <button className="btn btn-circle p-2 w-[70px] h-[65px] bg-[#FF38111A]">
                                <span className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] text-white font-bold">
                                    02
                                </span>
                            </button>

                            <h4 className="text-[#444444] text-lg font-bold mt-3">STEP TWO</h4>

                            <p className="text-[#737373] mt-2">It uses a dictionary of over 200.</p>
                        </div>

                        <div className="border-t-2 border-t-[#E8E8E8] text-center rounded-lg p-8">

                            <button className="btn btn-circle p-2 w-[70px] h-[65px] bg-[#FF38111A]">
                                <span className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] text-white font-bold">
                                    03
                                </span>
                            </button>

                            <h4 className="text-[#444444] text-lg font-bold mt-3">STEP THREE</h4>

                            <p className="text-[#737373] mt-2">It uses a dictionary of over 200.</p>
                        </div>

                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-8">

                    <div className="bg-[#F3F3F3] rounded-lg p-10">

                        <h3 className="text-[#151515] text-3xl font-bold">Services</h3>

                        {
                            services.map(service => <ul key={service._id}>

                                <Link to={`/serviceDetails/${service._id}`}>
                                    <div className="bg-white hover:bg-[#FF3811] text-[#151515] hover:text-white flex justify-between items-center rounded-md mt-4 px-4 py-2">

                                        <h4 className=" text-lg font-bold">{service.title}</h4>
                                        <FaArrowRight />
                                    </div>
                                </Link>
                            </ul>)
                        }

                    </div>

                    <div className="bg-[#151515] rounded-lg p-10 space-y-6">

                        <h3 className="text-white text-3xl font-bold">Download</h3>

                        <div className="flex justify-between items-center gap-6">
                            <div className="flex items-center gap-3">

                                <RiFileList3Line className="text-white text-3xl" />

                                <span>
                                    <h5 className="text-white text-xl font-semibold">Our Brochure</h5>
                                    <h6 className="text-[#A2A2A2]">Download</h6>
                                </span>
                            </div>

                            <button className="btn btn-square bg-[#FF3811] hover:bg-[#d23111] text-white">
                                <FaArrowRight />
                            </button>
                        </div>

                        <div className="flex justify-between items-center gap-6 ">
                            <div className="flex items-center gap-3">

                                <RiFileList3Line className="text-white text-3xl" />

                                <span>
                                    <h5 className="text-white text-xl font-semibold">Company Details</h5>
                                    <h6 className="text-[#A2A2A2]">Download</h6>
                                </span>
                            </div>

                            <button className="btn btn-square bg-[#FF3811] hover:bg-[#d23111] text-white">
                                <FaArrowRight />
                            </button>
                        </div>

                    </div>

                    <div className="bg-[#151515] rounded-lg p-10 space-y-6 text-center">

                        <img className="ms-24" src={logo} alt="" />

                        <h5 className="text-xl text-white font-bold">Need Help? We Are Here To Help You</h5>

                        <div className="relative bg-white rounded-lg p-10 space-y-3">
                            <h5 className="text-xl text-[#FF3811] font-bold">
                                Car Doctor <span className="text-[#151515]">Special</span>
                            </h5>

                            <h5 className="text-lg text-[#737373] font-bold">
                                Save up to <span className="text-[#FF3811] text-xl">60% off</span>
                            </h5>

                            <button className="absolute -bottom-[18px] inset-x-4 w-1/2 mx-auto bg-[#FF3811] text-white text-lg font-semibold text-center p-2 rounded-lg">Get A Quote</button>
                        </div>
                    </div>

                    <div className="mt-10">

                        <h3 className="text-[#151515] text-3xl font-bold my-4">Price: ${price}</h3>

                        <Link to={`/serviceDetails/${_id}`}>
                            <button className="w-full bg-[#FF3811] hover:bg-[#d23111] text-white text-lg text-center font-semibold p-2 rounded-md">Proceed Checkout</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;