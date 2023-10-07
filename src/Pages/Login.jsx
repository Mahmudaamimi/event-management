import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { BsGithub } from 'react-icons/bs';



const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <h2 className="text-xl font-semibold text-center mb-3">Log In</h2>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-green-500 text-white">Log in</button>
              </div>
              <button className="btn">
              <BsGithub className="text-xl"></BsGithub>
                Login With Github
              </button>
              <p>Don't have an account? <Link className="font-semibold underline text-green-500" to='/register'>Register</Link></p>

            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;