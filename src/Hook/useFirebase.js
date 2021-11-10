import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
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
    const signInWithGoogle = (history, redirectURI) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                //send user data to DB

                // clear error
                setError('')
                history.replace(redirectURI)
            }).catch(error => setError(error.code))
            .finally(() => setIsLoading(false))
    }

    // create user
    const signUpWithEmailPass = (displayName, email, pass, history, redirectURI) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, pass)
            .then(() => {
                // clear error
                setError('')

                //send user data to DB
                const user = { email, displayName }
                updateProfile(auth.currentUser, { displayName })
                    .then(() => {
                        setUser(user)
                    }).catch((error) => {
                        setError(error.code)
                    });

                history.replace(redirectURI)
            })
            .catch(error => setError(error.code))
            .finally(() => setIsLoading(false))

    }

    // sign in with email & password
    const sigInWithEmailPass = (email, pass, history, redirectURI) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setError('')
                // send email display name to db
                history.replace(redirectURI)
            }).catch(err => {
                console.log('test rd:', err)
                setError(err.code)
            })
            .finally(() => setIsLoading(false))
    }


    // Sign Out 
    const logout = () => {
        signOut(auth).then(() => {
            console.log('user Signout')
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


    // All test perpous
    useEffect(() => {
        console.log('error state changed: ', error)
    }, [error])




    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        signUpWithEmailPass,
        sigInWithEmailPass,
        logout
    }

}

export default useFirebase;