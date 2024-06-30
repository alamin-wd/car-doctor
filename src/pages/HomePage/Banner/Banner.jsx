import sliderImg1 from "../../../assets/images/banner/1.png";
import sliderImg2 from "../../../assets/images/banner/2.png";
import sliderImg3 from "../../../assets/images/banner/3.png";
import sliderImg4 from "../../../assets/images/banner/4.png";
import sliderImg5 from "../../../assets/images/banner/5.png";
import sliderImg6 from "../../../assets/images/banner/6.png";

const Banner = () => {

    return (

        <div>
            <div className="carousel w-full h-[600]">
                {/* Slider 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={sliderImg1} />

                    {/* Banner Body */}
                    <div className="absolute w-full bg-gradient-to-r from-[#151515] to-[#151515]... flex justify-center md:justify-start items-center text-center md:text-left md:ps-20 h-full">

                        <div className="space-y-4 md:w-1/2 mx-6">
                            <h2 className="text-3xl md:text-7xl text-white font-bold">Affordable
                                Price <br /> For Car Servicing</h2>

                            <p className="md:text-lg text-white px-2">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className="flex justify-center md:justify-start items-center gap-6">
                                <button className="bg-[#FF3811] text-white text-lg font-medium px-4 py-2 rounded-lg">Discover More</button>

                                <button className="border border-[#FF3811] text-[#FF3811] text-lg font-medium px-4 py-2 rounded-lg">Latest Project</button>
                            </div>

                        </div>
                    </div>

                    <div className="absolute md:right-20 top-1/2 md:top-[525px] md:bottom-20 flex justify-between md:justify-end gap-6 transform w-full md:w-20 px-1">

                        <a href="#slide6" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❮</a>
                        <a href="#slide2" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={sliderImg2} />

                    {/* Banner Body */}
                    <div className="absolute w-full bg-gradient-to-r from-[#151515] to-[#151515]... flex justify-center md:justify-start items-center text-center md:text-left md:ps-20 h-full">

                        <div className="space-y-4 md:w-1/2 mx-6">
                            <h2 className="text-3xl md:text-7xl text-white font-bold">Affordable
                                Price <br /> For Car Servicing</h2>

                            <p className="md:text-lg text-white px-2">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className="flex justify-center md:justify-start items-center gap-6">
                                <button className="bg-[#FF3811] text-white text-lg font-medium px-4 py-2 rounded-lg">Discover More</button>

                                <button className="border border-[#FF3811] text-[#FF3811] text-lg font-medium px-4 py-2 rounded-lg">Latest Project</button>
                            </div>

                        </div>
                    </div>

                    <div className="absolute md:right-20 top-1/2 md:top-[525px] md:bottom-20 flex justify-between md:justify-end gap-6 transform w-full md:w-20 px-1">

                        <a href="#slide1" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❮</a>
                        <a href="#slide3" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={sliderImg3} />

                    {/* Banner Body */}
                    <div className="absolute w-full bg-gradient-to-r from-[#151515] to-[#151515]... flex justify-center md:justify-start items-center text-center md:text-left md:ps-20 h-full">

                        <div className="space-y-4 md:w-1/2 mx-6">
                            <h2 className="text-3xl md:text-7xl text-white font-bold">Affordable
                                Price <br /> For Car Servicing</h2>

                            <p className="md:text-lg text-white px-2">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className="flex justify-center md:justify-start items-center gap-6">
                                <button className="bg-[#FF3811] text-white text-lg font-medium px-4 py-2 rounded-lg">Discover More</button>

                                <button className="border border-[#FF3811] text-[#FF3811] text-lg font-medium px-4 py-2 rounded-lg">Latest Project</button>
                            </div>

                        </div>
                    </div>

                    <div className="absolute md:right-20 top-1/2 md:top-[525px] md:bottom-20 flex justify-between md:justify-end gap-6 transform w-full md:w-20 px-1">

                        <a href="#slide2" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❮</a>
                        <a href="#slide4" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={sliderImg4} />

                    {/* Banner Body */}
                    <div className="absolute w-full bg-gradient-to-r from-[#151515] to-[#151515]... flex justify-center md:justify-start items-center text-center md:text-left md:ps-20 h-full">

                        <div className="space-y-4 md:w-1/2 mx-6">
                            <h2 className="text-3xl md:text-7xl text-white font-bold">Affordable
                                Price <br /> For Car Servicing</h2>

                            <p className="md:text-lg text-white px-2">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className="flex justify-center md:justify-start items-center gap-6">
                                <button className="bg-[#FF3811] text-white text-lg font-medium px-4 py-2 rounded-lg">Discover More</button>

                                <button className="border border-[#FF3811] text-[#FF3811] text-lg font-medium px-4 py-2 rounded-lg">Latest Project</button>
                            </div>

                        </div>
                    </div>

                    <div className="absolute md:right-20 top-1/2 md:top-[525px] md:bottom-20 flex justify-between md:justify-end gap-6 transform w-full md:w-20 px-1">

                        <a href="#slide3" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❮</a>
                        <a href="#slide5" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 5 */}
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={sliderImg5} />

                    {/* Banner Body */}
                    <div className="absolute w-full bg-gradient-to-r from-[#151515] to-[#151515]... flex justify-center md:justify-start items-center text-center md:text-left md:ps-20 h-full">

                        <div className="space-y-4 md:w-1/2 mx-6">
                            <h2 className="text-3xl md:text-7xl text-white font-bold">Affordable
                                Price <br /> For Car Servicing</h2>

                            <p className="md:text-lg text-white px-2">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className="flex justify-center md:justify-start items-center gap-6">
                                <button className="bg-[#FF3811] text-white text-lg font-medium px-4 py-2 rounded-lg">Discover More</button>

                                <button className="border border-[#FF3811] text-[#FF3811] text-lg font-medium px-4 py-2 rounded-lg">Latest Project</button>
                            </div>

                        </div>
                    </div>

                    <div className="absolute md:right-20 top-1/2 md:top-[525px] md:bottom-20 flex justify-between md:justify-end gap-6 transform w-full md:w-20 px-1">

                        <a href="#slide4" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❮</a>
                        <a href="#slide6" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 6 */}
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={sliderImg6} />

                    {/* Banner Body */}
                    <div className="absolute w-full bg-gradient-to-r from-[#151515] to-[#151515]... flex justify-center md:justify-start items-center text-center md:text-left md:ps-20 h-full">

                        <div className="space-y-4 md:w-1/2 mx-6">
                            <h2 className="text-3xl md:text-7xl text-white font-bold">Affordable
                                Price <br /> For Car Servicing</h2>

                            <p className="md:text-lg text-white px-2">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div className="flex justify-center md:justify-start items-center gap-6">
                                <button className="bg-[#FF3811] text-white text-lg font-medium px-4 py-2 rounded-lg">Discover More</button>

                                <button className="border border-[#FF3811] text-[#FF3811] text-lg font-medium px-4 py-2 rounded-lg">Latest Project</button>
                            </div>

                        </div>
                    </div>

                    <div className="absolute md:right-20 top-1/2 md:top-[525px] md:bottom-20 flex justify-between md:justify-end gap-6 transform w-full md:w-20 px-1">

                        <a href="#slide5" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❮</a>
                        <a href="#slide1" className="bg-[#5b352f9e] hover:bg-[#FF3811] text-white px-3 py-1 md:px-5 md:py-3 rounded-full">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;