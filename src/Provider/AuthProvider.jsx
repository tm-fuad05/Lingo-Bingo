import React, { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  handleCreateAccount: async () => {},
  handleSignIn: async () => {},
  handleSignOut: async () => {},
  handleUpdateProfile: async () => {},
  handleSignInWithGoogle: async () => {},
  loader: false,
});

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const handleCreateAccount = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSignInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  const handleSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoader(false);
      },
      (error) => {
        console.error("Auth state change error:", error);
        setLoader(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const handleUpdateProfile = (profile) => {
    if (!auth.currentUser) {
      return Promise.resolve();
    }

    return updateProfile(auth.currentUser, profile);
  };

  const authInfo = {
    user,
    setUser,
    handleCreateAccount,
    handleSignIn,
    handleSignOut,
    handleUpdateProfile,
    handleSignInWithGoogle,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
