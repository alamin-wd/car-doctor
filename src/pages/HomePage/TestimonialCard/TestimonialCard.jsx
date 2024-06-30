import { FaStar } from "react-icons/fa";
import quote from "../../../assets/icons/quote.svg";

const TestimonialCard = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="border border-[#F3F3F3] rounded-lg p-10 space-y-4">

                <div className="flex justify-between items-center gap-6">
                    <div className="flex items-center gap-8">
                        <img className="w-16 rounded-full"
                            src="https://i.ibb.co/mC4vkgh/Untitled-design-1.png" alt="" />
                        <span>
                            <h4 className="text-2xl text-[#444444] font-bold">Awlad Hossain</h4>
                            <p className="text-lg text-[#737373] font-medium">Businessman</p>
                        </span>
                    </div>
                    <img className="w-16 text-[#FF381133]"
                        src={quote} alt="" />
                    <div></div>
                </div>

                <p className="text-[#737373]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.
                </p>
                <div className=" flex items-center gap-2">
                    <FaStar className="text-[#FF912C]" />
                    <FaStar className="text-[#FF912C]" />
                    <FaStar className="text-[#FF912C]" />
                    <FaStar className="text-[#FF912C]" />
                    <FaStar className="text-[#FF912C]" />
                </div>
            </div>

            <div className="border border-[#F3F3F3] rounded-lg p-10 space-y-4">

                <div className="flex justify-between items-center gap-6">
                    <div className="flex items-center gap-8">
                        <img className="w-16 rounded-full"
                            src="https://i.ibb.co/mC4vkgh/Untitled-design-1.png" alt="" />
                        <span>
                            <h4 className="text-2xl text-[#444444] font-bold">Awlad Hossain</h4>
                            <p className="text-lg text-[#737373] font-medium">Businessman</p>
                        </span>
                    </div>
                    <img className="w-16 text-[#FF381133]"
                        src={quote} alt="" />
                    <div></div>
                </div>

                <p className="text-[#737373]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable.
                </p>
                <div className=" flex items-center gap-2">
                    <FaStar className="text-[#FF912C]" />
                    <FaStar className="text-[#FF912C]" />
                    <FaStar className="text-[#FF912C]" />
                    <FaStar className="text-[#FF912C]" />
                    <FaStar className="text-[#FF912C]" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;