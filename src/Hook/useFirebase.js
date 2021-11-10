import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()




    // sign in with gooogle
    const signInWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                //send user data to DB
                console.log(result.user)
            }).catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }

    // Sign Out 
    const logout = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }


    // Special observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;

    }, [auth])




    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        logout
    }

}

export default useFirebase;