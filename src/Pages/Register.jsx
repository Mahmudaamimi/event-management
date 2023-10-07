import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h2 className="text-xl font-semibold">Enter your details to register</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Namee</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500 text-white">Registation</button>
                            </div>
                        <p>Already have an account? <Link className="font-semibold underline text-green-500" to='/login'>Log In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;