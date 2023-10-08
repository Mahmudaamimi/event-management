import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { BsGithub } from 'react-icons/bs';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from 'react-toastify';


const Login = () => {
  const { loginUser, githubLogin } = useContext(AuthContext);
  const [loginerror, setLoginerror] = useState("");
  const [loginsuccess, setLoginsuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(password, email);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        if (setLoginsuccess) {
          toast('Login Successful');
          navigate(location?.state ? location.state : '/');
        }
      })
      .catch((error) => {
        console.error(error);
        if (setLoginerror) {
          toast('Incorrect password');
        }
      });
  };

  const handleloginwithgithub = () => {
    githubLogin()
      .then(result => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
              <h2 className="text-xl font-semibold text-center mb-3">Log In</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-green-500 text-white">Log in</button>
                <i className="text-center">or</i>
              </div>
              <button onClick={handleloginwithgithub} className="btn">
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
