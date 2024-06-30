import { FaStar } from "react-icons/fa";
import product1 from "../../../assets/images/products/product1.png";
import product2 from "../../../assets/images/products/product2.png";
import product3 from "../../../assets/images/products/product3.png";
import product4 from "../../../assets/images/products/product4.png";
import product5 from "../../../assets/images/products/product5.png";
import product6 from "../../../assets/images/products/product6.png";

const Products = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-6">

            {/* Card 1 */}
            <div className="card border border-[#E8E8E8]">

                <figure className="bg-[#F3F3F3] h-[250px] m-6 p-10 rounded-xl">
                    <img
                        src={product1}
                        alt="Team photo"
                        className="rounded-lg w-48" />
                </figure>

                <div className="card-body items-center text-center">

                    <div className=" flex items-center gap-2">
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                    </div>

                    <h2 className="card-title text-[#444444] font-bold">Car Engine Tools</h2>
                    <p className="text-[#FF3811] font-medium">$20.00</p>

                </div>
            </div>

            {/* Card 2 */}
            <div className="card border border-[#E8E8E8]">

                <figure className="bg-[#F3F3F3] h-[250px] m-6 p-10 rounded-xl">
                    <img
                        src={product2}
                        alt="Team photo"
                        className="rounded-lg" />
                </figure>

                <div className="card-body items-center text-center">

                    <div className=" flex items-center gap-2">
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                    </div>

                    <h2 className="card-title text-[#444444] font-bold">Car Air Filter</h2>
                    <p className="text-[#FF3811] font-medium">$20.00</p>

                </div>
            </div>

            {/* Card 3 */}
            <div className="card border border-[#E8E8E8]">

                <figure className="bg-[#F3F3F3] h-[250px] m-6 p-10 rounded-xl">
                    <img
                        src={product3}
                        alt="Team photo"
                        className="rounded-lg w-48" />
                </figure>

                <div className="card-body items-center text-center">

                    <div className=" flex items-center gap-2">
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                    </div>

                    <h2 className="card-title text-[#444444] font-bold">Car Break Disk</h2>
                    <p className="text-[#FF3811] font-medium">$20.00</p>

                </div>
            </div>

            {/* Card 4 */}
            <div className="card border border-[#E8E8E8]">

                <figure className="bg-[#F3F3F3] h-[250px] m-6 p-10 rounded-xl">
                    <img
                        src={product4}
                        alt="Team photo"
                        className="rounded-lg w-48" />
                </figure>

                <div className="card-body items-center text-center">

                    <div className=" flex items-center gap-2">
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                    </div>

                    <h2 className="card-title text-[#444444] font-bold">Car Break Shape</h2>
                    <p className="text-[#FF3811] font-medium">$20.00</p>

                </div>
            </div>

            {/* Card 5 */}
            <div className="card border border-[#E8E8E8]">

                <figure className="bg-[#F3F3F3] h-[250px] m-6 p-10 rounded-xl">
                    <img
                        src={product5}
                        alt="Team photo"
                        className="rounded-lg w-48" />
                </figure>

                <div className="card-body items-center text-center">

                    <div className=" flex items-center gap-2">
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                    </div>

                    <h2 className="card-title text-[#444444] font-bold">Car Tyres</h2>
                    <p className="text-[#FF3811] font-medium">$20.00</p>

                </div>
            </div>

            {/* Card 6 */}
            <div className="card border border-[#E8E8E8]">

                <figure className="bg-[#F3F3F3] h-[250px] m-6 p-10 rounded-xl">
                    <img
                        src={product6}
                        alt="Team photo"
                        className="rounded-lg" />
                </figure>

                <div className="card-body items-center text-center">

                    <div className=" flex items-center gap-2">
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                        <FaStar className="text-[#FF912C]" />
                    </div>

                    <h2 className="card-title text-[#444444] font-bold">Car Battery</h2>
                    <p className="text-[#FF3811] font-medium">$20.00</p>

                </div>
            </div>

        </div>
    );
};

export default Products;