import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { sendEmailVerification } from "firebase/auth";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [registererror,setRegistererror] = useState('')
    const [registersuccess,setRegistersuccess] = useState('')
    const handleregister = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const text = (form.get('text'))
        const password = (form.get('password'))
        const email = (form.get('email'))
        const checkbox = e.target.checkbox.checked;
        if (password.length < 6) {
            setRegistererror('Password should be at least 6 characters ');
            return
            
        }   
        else if(!/[A-Z]/.test(password)){
            setRegistererror("Password must contain at least one uppercase letter.")
            return

        }else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            setRegistererror('Password must contain at least one special character')
            return

        }
        else if(!checkbox){
            setRegistererror("Please check the checkbox.")
            return

        }
        setRegistererror('')
        setRegistersuccess('')
        

        createUser(email,password)
        .then((result) => {
            console.log(result.user)
            if (setRegistersuccess) {
                toast("User registation successful")
                
            }
              //email verification
            //   sendEmailVerification(result.user)
            //   .then(() => {
            //     toast("Email verification sent!") 

            //   });

          })
          .catch((error) => {
            console.error(error)
            setRegistererror(error.message)
    
          });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleregister} className="card-body">
                            <h2 className="text-xl font-semibold">Enter your details to register</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" 
                               name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                  <div className="flex gap-1">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      value="checkbox"
                    />
                    <label className="text-sm" htmlFor="vehicle1">Tearms and condition</label>
                  </div>
                
                </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500 text-white">Registation</button>
                            </div>
                            <p>Already have an account? <Link className="font-semibold underlinetext-green-500 underline text-green-500" to='/login'>Log In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            {
                registererror && <p className="text-red-500 text-sm text-center">{registererror}</p>
            }
         <ToastContainer />
        </div>

    );
};

export default Register;