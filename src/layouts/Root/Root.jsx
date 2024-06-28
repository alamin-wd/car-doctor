import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";

const Root = () => {

    return (

        <div className="max-w-full">

            <div className="w-11/12 mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Root;