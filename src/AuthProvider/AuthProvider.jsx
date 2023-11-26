import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import auth from './../config/firebase/firebase.config';


export const AuthContext=createContext()
const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState({})
    const [loading,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider()

// create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
// signin with email and password
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google signin
    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, createUser, signin, googleSignin, logout ,loading }
   
    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;