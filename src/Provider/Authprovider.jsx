import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
export const AuthContext = createContext(null)


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser);
        });
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user,createUser,loginUser,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;