import React, { createContext, useEffect, useState } from "react";
import {
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signOut,
     updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loader, setLoader] = useState(true);
     const createUser = (email, password) => {
          setLoader(true);
          return createUserWithEmailAndPassword(auth, email, password);
     };
     const signIn = (email, password) => {
          setLoader(true);
          return signInWithEmailAndPassword(auth, email, password);
     };
     const updateUser = (name) => {
          updateProfile(auth.currentUser, {
               displayName: name,
               // photoURL: "https://example.com/jane-q-user/profile.jpg",
          });
     };
     const userSignOut = (value) => {
          setLoader(true);
          return signOut(auth);
     };
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               console.log(currentUser);
               setLoader(false);
          });
          return () => {
               return unSubscribe();
          };
     }, []);

     const authInfo = {
          user,
          loader,
          createUser,
          signIn,
          userSignOut,
          updateUser,
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;
