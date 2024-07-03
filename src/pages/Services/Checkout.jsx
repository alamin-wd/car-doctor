import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import checkoutPageBanner from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {

    const service = useLoaderData();
    const { user } = useContext(AuthContext);

    const { _id, title, img, price } = service;

    const handleConfirmOrder = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const time = form.time.value;
        const street = form.street.value;
        const city = form.city.value;
        const country = form.country.value;

        const order = {
            serviceId: _id,
            serviceName: title,
            image: img,
            servicePrice: price,
            customerName: user?.displayName || name,
            customerEmail: user?.email || email,
            phoneNumber: phone,
            serviceDate: date,
            serviceTime: time,
            customerStreetName: street,
            customerCityName: city,
            customerCountryName: country
        }
        console.log(order);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Order has been Placed",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })

    }

    return (

        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Checkout - {title}</title>
            </Helmet>

            {/* Page Banner */}
            <div className="md:pt-6">
                <div className="relative w-full">
                    <img className="w-full" src={checkoutPageBanner} />

                    <div className="w-full absolute top-0 bg-gradient-to-r from-[#151515] to-[#151515]... flex items-center h-full rounded-lg">

                        <div className="w-full text-center">
                            <h2 className="text-3xl md:text-5xl text-white font-bold">Checkout</h2>
                        </div>
                    </div>

                    {/* Breadcrumb */}
                    <div className="absolute bottom-0 inset-x-6 breadcrumbs text-sm md:bg-[#FF3811] w-full md:w-1/6 mx-auto">
                        <ul className="mx-8 text-white">
                            <li><a>Home</a></li>
                            <li><a>Checkout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#F3F3F3] rounded-lg my-10 md:my-20">

                <div className="bg-[#c4c3c3] rounded-t-lg py-2 md:py-4 text-center">
                    <p className="text-xl font-medium">Fill the order form below, to complete your purchase.</p>
                </div>

                <div className="p-4 md:px-10 md:pb-12">

                    <div className="my-6 text-center">
                        <h3 className="text-[#151515] text-2xl md:text-3xl font-semibold">Service Name: {title}</h3>
                    </div>

                    <form onSubmit={handleConfirmOrder}
                        className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-10">

                        {/* Basic information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                            <div className="col-span-2">
                                <h3 className="text-[#151515] text-xl font-semibold">Your Basic Information</h3>
                            </div>

                            <div className="form-control col-span-2">
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={user?.displayName}
                                    placeholder="First Name"
                                    className="input " required />
                            </div>

                            <div className="form-control col-span-2">
                                <input
                                    name="email"
                                    type="email"
                                    defaultValue={user?.email}
                                    placeholder="Your Email"
                                    className="input " required />
                            </div>

                            <div className="form-control col-span-2">
                                <input
                                    name="phone"
                                    type="text"
                                    placeholder="Your Phone"
                                    className="input " required />
                            </div>

                        </div>

                        {/* Billing Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 col-span-2 md:col-span-1 mt-6 md:mt-0">

                            <div className="col-span-2">
                                <h3 className="text-[#151515] text-xl font-semibold">Billing Information</h3>
                            </div>

                            <div className="form-control col-span-2 md:col-span-1">
                                <input
                                    name="date"
                                    type="date"
                                    placeholder="Date"
                                    className="input " required />
                            </div>

                            <div className="form-control col-span-2 md:col-span-1">
                                <input
                                    name="time"
                                    type="time"
                                    placeholder="Time"
                                    className="input " required />
                            </div>

                            <div className="form-control col-span-2">
                                <input
                                    name="street"
                                    type="text"
                                    placeholder="Street"
                                    className="input " required />
                            </div>

                            <div className="form-control col-span-2 md:col-span-1">
                                <input
                                    name="city"
                                    type="text"
                                    placeholder="City"
                                    className="input " required />
                            </div>

                            <div className="form-control col-span-2 md:col-span-1">
                                <input
                                    name="country"
                                    type="text"
                                    placeholder="Country"
                                    className="input " required />
                            </div>

                        </div>

                        <div className="form-control col-span-2 mt-6">
                            <input
                                type="submit"
                                value="Confirm Order"
                                className="w-full bg-[#FF3811] hover:bg-[#d23111] py-3 rounded-lg text-white font-medium" />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Checkout;