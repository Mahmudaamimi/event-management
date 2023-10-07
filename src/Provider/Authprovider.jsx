import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
export const AuthContext = createContext(null)


const Authprovider = ({children}) => {
    const [user,setUser] = useState();
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser);
        });
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user,createUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;