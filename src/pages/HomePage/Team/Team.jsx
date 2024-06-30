import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";

const Team = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6">

            <div className="card border border-[#E8E8E8] shadow-lg">

                <figure className="px-10 pt-10">
                    <img
                        src={team1}
                        alt="Team photo"
                        className="rounded-lg" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#444444] font-bold">Car Engine Plug</h2>
                    <p className="text-[#737373] font-medium">Engine Expert</p>

                    <div className="card-actions">
                        <button className="bg-[#395185] hover:bg-[#e0dede] text-white hover:text-[#395185] p-2 rounded-full">
                            <FaFacebookF />
                        </button>

                        <button className="bg-[#55ACEE] hover:bg-[#e0dede] text-white hover:text-[#55ACEE] p-2 rounded-full">
                            <FaTwitter />
                        </button>

                        <button className="bg-[#0A66C2] hover:bg-[#e0dede] text-white hover:text-[#0A66C2] p-2 rounded-full">
                            <FaLinkedinIn />
                        </button>

                        <button className="bg-gradient-to-r from-[#9748BE] via-[#E94369] to-[#F08053] ... hover:bg-white 
                        text-white hover:text-[#F08053] ... p-2 rounded-full">
                            <FaInstagram />
                        </button>
                    </div>

                </div>

            </div>

            {/* Card 2 */}
            <div className="card border border-[#E8E8E8] shadow-lg">

                <figure className="px-10 pt-10">
                    <img
                        src={team2}
                        alt="Team photo"
                        className="rounded-lg" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#444444] font-bold">Car Engine Plug</h2>
                    <p className="text-[#737373] font-medium">Engine Expert</p>

                    <div className="card-actions">
                        <button className="bg-[#395185] hover:bg-[#e0dede] text-white hover:text-[#395185] p-2 rounded-full">
                            <FaFacebookF />
                        </button>

                        <button className="bg-[#55ACEE] hover:bg-[#e0dede] text-white hover:text-[#55ACEE] p-2 rounded-full">
                            <FaTwitter />
                        </button>

                        <button className="bg-[#0A66C2] hover:bg-[#e0dede] text-white hover:text-[#0A66C2] p-2 rounded-full">
                            <FaLinkedinIn />
                        </button>

                        <button className="bg-gradient-to-r from-[#9748BE] via-[#E94369] to-[#F08053] ... hover:bg-white 
                    text-white hover:text-[#F08053] ... p-2 rounded-full">
                            <FaInstagram />
                        </button>
                    </div>

                </div>

            </div>

            {/* Card 3 */}
            <div className="card border border-[#E8E8E8] shadow-lg">

                <figure className="px-10 pt-10">
                    <img
                        src={team3}
                        alt="Team photo"
                        className="rounded-lg" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#444444] font-bold">Car Engine Plug</h2>
                    <p className="text-[#737373] font-medium">Engine Expert</p>

                    <div className="card-actions">
                        <button className="bg-[#395185] hover:bg-[#e0dede] text-white hover:text-[#395185] p-2 rounded-full">
                            <FaFacebookF />
                        </button>

                        <button className="bg-[#55ACEE] hover:bg-[#e0dede] text-white hover:text-[#55ACEE] p-2 rounded-full">
                            <FaTwitter />
                        </button>

                        <button className="bg-[#0A66C2] hover:bg-[#e0dede] text-white hover:text-[#0A66C2] p-2 rounded-full">
                            <FaLinkedinIn />
                        </button>

                        <button className="bg-gradient-to-r from-[#9748BE] via-[#E94369] to-[#F08053] ... hover:bg-white 
        text-white hover:text-[#F08053] ... p-2 rounded-full">
                            <FaInstagram />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Team;