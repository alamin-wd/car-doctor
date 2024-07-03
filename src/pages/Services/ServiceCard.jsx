import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {

    const {_id, title, img, price } = service;

    return (

        <div className="card w-96 border flex flex-col h-full">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>

            <div className="card-body">
                <h3 className="text-[#444444] text-2xl font-bold">{title}</h3>

                <div className="flex justify-between items-center text-[#FF3811]">
                    <h4 className="text-lg font-semibold">
                        Price: <span>${price}</span></h4>

                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="mt-1 hover:translate-x-1 hover:transition-all">
                            <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.node,
}

export default ServiceCard;