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
import axios from "axios";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // get user role from DB and set idAdmin
    const handleIsAdmin = email => {
        axios.get(`https://shrouded-atoll-11239.herokuapp.com/users/${email}`)
            .then(res => {
                const user = res.data
                console.log('test user db', user)
                if (user?.role === 'admin') {
                    setIsAdmin(true)
                    console.log('admin')
                }
                else {
                    setIsAdmin(false)
                    console.log('not admin')
                }
            })
            .catch(err => console.log('got an error: ', err))
    }


    // sign in with gooogle
    const signInWithGoogle = (history, redirectURI) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { email, displayName } = result.user
                //send user data to DB
                axios.put('https://shrouded-atoll-11239.herokuapp.com/users', { email, displayName })
                    .then(res => console.log('user added'))
                    .catch(err => console.log('Got an error', err))


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
                axios.put('https://shrouded-atoll-11239.herokuapp.com/users', { email, displayName })
                    .then(res => console.log('user added'))

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
                setError('') // Clear error
                history.replace(redirectURI) // Redirect

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
                // Set is admin
                handleIsAdmin(user.email)
            }
            else {
                setUser({})
                // clear is admin
                setIsAdmin(false)
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
        isAdmin,
        error,
        isLoading,
        signInWithGoogle,
        signUpWithEmailPass,
        sigInWithEmailPass,
        logout
    }

}

export default useFirebase;