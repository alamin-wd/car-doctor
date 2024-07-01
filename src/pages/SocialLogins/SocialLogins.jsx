import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import google from "../../assets/icons/google.png";
const SocialLogins = () => {

    return (
        <div className="flex justify-center items-center gap-6 text-center my-4">
            {/* onClick={handleGoogleLogin} */}
            <button
                className="w-10 bg-[#ebebf7] hover:bg-[#f47e73b5] text-lg p-2 rounded-full">
                    <img className="w-6" src={google} alt="" />
            </button>

            <button
                className="w-10 bg-[#ebebf7] hover:bg-[#3B5998] text-[#3B5998] hover:text-white text-lg text-center p-3 rounded-full">
                    <FaFacebookF className="mr-2" />
            </button>

            <button
                className="w-10 bg-[#ebebf7] hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white text-lg text-center p-3 rounded-full">
                    <FaLinkedinIn />
            </button>


        </div>
    );
};

export default SocialLogins;