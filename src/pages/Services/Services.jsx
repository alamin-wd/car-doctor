import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (

        <div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 my-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;