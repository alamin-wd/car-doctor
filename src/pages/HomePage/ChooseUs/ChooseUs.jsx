import chooseUsIcon1 from "../../../../src/assets/icons/group.svg";
import chooseUsIcon2 from "../../../../src/assets/icons/Group38729.svg";
import chooseUsIcon3 from "../../../../src/assets/icons/person.svg";
import chooseUsIcon4 from "../../../../src/assets/icons/Wrench.svg";
import chooseUsIcon5 from "../../../../src/assets/icons/check.svg";
import chooseUsIcon6 from "../../../../src/assets/icons/deliveryt.svg";

const ChooseUs = () => {

    return (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-between items-center gap-6 mt-10">
            <div className="border border-[#E8E8E8] text-center rounded-lg p-4 h-[160px] hover:bg-[#FF3811] hover:text-white">
                <img className="w-32 mx-auto" src={chooseUsIcon1} alt="" />

                <h5 className="text-lg text-[#444444] font-bold mt-2 mb-4 ">Expert Team</h5>
            </div>

            <div className="border border-[#E8E8E8] text-center rounded-lg p-4 h-[160px] hover:bg-[#FF3811] hover:text-white">
                <img className="w-24 mx-auto bg-black rounded-full" src={chooseUsIcon2} alt="" />

                <h5 className="text-lg text-[#444444] font-bold mt-2 mb-4">Timely Delivery</h5>
            </div>

            <div className="border border-[#E8E8E8] text-center rounded-lg p-4 h-[160px] hover:bg-[#FF3811] hover:text-white">
                <img className="w-20 mx-auto" src={chooseUsIcon3} alt="" />

                <h5 className="text-lg text-[#444444] font-bold mt-2 mb-4">24/7 Support</h5>
            </div>

            <div className="border border-[#E8E8E8] text-center rounded-lg p-4 h-[160px] hover:bg-[#FF3811] hover:text-white">
                <img className="w-24 mx-auto" src={chooseUsIcon4} alt="" />

                <h5 className="text-lg text-[#444444] font-bold mt-2 mb-4">Best Equipment</h5>
            </div>

            <div className="border border-[#E8E8E8] text-center rounded-lg p-4 h-[160px] hover:bg-[#FF3811] hover:text-white">
                <img className="w-20 mx-auto" src={chooseUsIcon5} alt="" />

                <h5 className="text-lg text-[#444444] font-bold mt-2 mb-4">100% Guranty</h5>
            </div>

            <div className="border border-[#E8E8E8] text-center rounded-lg p-4 h-[160px] hover:bg-[#FF3811] hover:text-white">
                <img className="w-28 mx-auto" src={chooseUsIcon6} alt="" />

                <h5 className="text-lg text-[#444444] font-bold mt-2 mb-4">Timely Delivery</h5>
            </div>

        </div>
    );
};

export default ChooseUs;