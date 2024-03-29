import React, { useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";
import { useState } from "react";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();

  const registerUser = (email, password, displayName, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setAuthError("");
        const newUser = { email: email, displayName: displayName };
        setUser(newUser);

        //save user to database
        saveUser(email, displayName);
      }
    );

    updateProfile(auth.currentUser, {
      displayName: displayName,
    })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
        history.replace("/");
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.push(destination);
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = {email, displayName};
    fetch('https://apartment-server-production.up.railway.app/users', {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    // .then()
  };

  return {
    user,
    registerUser,
    isLoading,
    authError,
    loginUser,
    logOut,
    saveUser,
  };
};

export default useFirebase;
