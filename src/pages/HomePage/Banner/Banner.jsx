import sliderImg1 from "../../../assets/images/banner/1.jpg";
import sliderImg2 from "../../../assets/images/banner/2.jpg";
import sliderImg3 from "../../../assets/images/banner/3.jpg";
import sliderImg4 from "../../../assets/images/banner/4.jpg";
import sliderImg5 from "../../../assets/images/banner/5.jpg";
import sliderImg6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {

    return (

        <div>
            <div className="carousel w-full">
                {/* Slider 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={sliderImg1}/>
                    <div className="absolute right-20 flex justify-end gap-6 bottom-10 transform -translate-y-1/2">
                        <a href="#slide6" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❮</a>
                        <a href="#slide2" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={sliderImg2}
                        className="w-full" />
                    <div className="absolute right-20 flex justify-end gap-6 bottom-10 transform -translate-y-1/2">
                        <a href="#slide1" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❮</a>
                        <a href="#slide3" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={sliderImg3}
                        className="w-full" />
                    <div className="absolute right-20 flex justify-end gap-6 bottom-10 transform -translate-y-1/2">
                        <a href="#slide2" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❮</a>
                        <a href="#slide4" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={sliderImg4}
                        className="w-full" />
                    <div className="absolute right-20 flex justify-end gap-6 bottom-10 transform -translate-y-1/2">
                        <a href="#slide3" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❮</a>
                        <a href="#slide5" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 5 */}
                <div id="slide5" className="carousel-item relative w-full">
                    <img
                        src={sliderImg5}
                        className="w-full" />
                    <div className="absolute right-20 flex justify-end gap-6 bottom-10 transform -translate-y-1/2">
                        <a href="#slide4" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❮</a>
                        <a href="#slide6" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❯</a>
                    </div>
                </div>

                {/* Slider 6 */}
                <div id="slide6" className="carousel-item relative w-full">
                    <img
                        src={sliderImg6}
                        className="w-full" />
                    <div className="absolute right-20 flex justify-end gap-6 bottom-10 transform -translate-y-1/2">
                        <a href="#slide5" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❮</a>
                        <a href="#slide1" className="bg-[#FFFFFF33] hover:bg-[#FF3811] text-white px-5 py-3 rounded-full">❯</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;