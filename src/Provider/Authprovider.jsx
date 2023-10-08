import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)


const Authprovider = ({children}) => {
    const githubprovider = new GithubAuthProvider();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,githubprovider);
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser);
            setLoading(false)
        });
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user,loading,createUser,loginUser,logOut,githubLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;