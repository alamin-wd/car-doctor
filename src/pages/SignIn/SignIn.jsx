import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import SocialLogins from "../SocialLogins/SocialLogins";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";

const SignIn = () => {

    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));

    };

    return (

        <div className="w-11/12 mx-auto flex flex-col md:flex-row  md:items-center gap-10 my-10">

            <div className="md:w-1/2 md:ml-28">
                <img src={loginImg} alt="" />
            </div>

            <div className="md:w-1/2">
                <div className="card shrink-0 w-full max-w-sm border ">

                    <h4 className="text-[#444444] text-4xl text-center mt-10 font-bold">Sign In</h4>

                    <form onSubmit={handleSignIn}
                        className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered" required />
                        </div>

                        <div className="form-control relative">

                            <label className="label">
                                <span className="label-text text-[#403F3F] font-medium">Password</span>
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input input-bordered" />

                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 mt-8"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowPassword(!showPassword);
                                }}>

                                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}

                            </button>

                        </div>

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Sign In"
                                className="bg-[#FF3811] hover:bg-[#d23111] py-3 rounded-lg text-white font-medium" />
                        </div>

                    </form>

                    <div className="text-center mb-6 space-y-4">

                        <p className="text-[#444444] text-lg font-medium">Or Sign In With</p>

                        <span>
                            {
                                <SocialLogins></SocialLogins>
                            }
                        </span>

                        <p className="text-[#737373]">New To Car Doctor?
                            <Link to="/signUp"
                                className="text-[#FF3811] hover:text-[#d23111] font-medium hover:underline ml-1">
                                Sign Up
                            </Link>
                        </p>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default SignIn;