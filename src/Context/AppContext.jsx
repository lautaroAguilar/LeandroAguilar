"use client";
import { createContext, useCallback, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, query, push } from "firebase/database";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const AppContext = createContext();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyClnBU5z1iZ4Ynp1urMP_rqjp2Zr9nyWxI",
  authDomain: "leandroaguilar-27bad.firebaseapp.com",
  databaseURL: "https://leandroaguilar-27bad-default-rtdb.firebaseio.com",
  projectId: "leandroaguilar-27bad",
  storageBucket: "leandroaguilar-27bad.appspot.com",
  messagingSenderId: "517008801311",
  appId: "1:517008801311:web:b9f888d9da76f1a8b41f2a",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const usersRefe = ref(db, "users/");
const reviewRefe = ref(db, "review/");
//auth
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const AppContextProvider = ({ children }) => {
  //Form
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const submitUser = (e) => {
    e.preventDefault();
    push(usersRefe, formData);
    console.log(formData);
  };

  const [isOpen, setIsOpen] = useState(false);
  //LoginModal
  const handleOpenLoginModal = () => {
    setIsOpen(true);
  };
  const handleCloseLoginModal = () => {
    setIsOpen(false);
  };

  //ReviewModal
  const handleOpenReviewModal = () => {
    setIsOpen(true);
  };
  const handleCloseReviewModal = () => {
    setIsOpen(false);
  };
  const [review, setReview] = useState({
    reseña: "",
  });

  const reviewChange = useCallback((e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  }, []);

  const submitReview = (e) => {
    e.preventDefault();
    push(reviewRefe, review);
    console.log(review);
  };

  //Auth
  const logInGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data)
      const user = {
        nombre: data.user.displayName,
        email: data.user.email,
        foto: data.user.photoURL,
        verificado: data.user.emailVerified
      }
      console.log("resultado del inicio de sesion:", user);
    });
  };
  
  const logOut = ()=>{
    signOut(auth).then((result)=>{
      console.log("cerró sesión",result)
    })
  }

  const isLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      console.log("está logueado?",user);
      if(user){
        window.location.replace("/review")
      }else{
        window.location.replace("/login")
      }
    });
  };

  
  return (
    <>
      <AppContext.Provider
        value={{
          formData,
          handleChange,
          submitUser,

          review,
          reviewChange,
          submitReview,

          isOpen,
          setIsOpen,
          handleOpenLoginModal,
          handleCloseLoginModal,

          handleOpenReviewModal,
          handleCloseReviewModal,

          logInGoogle,
          logOut,
          isLoggedIn
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
export const useAppContext = () => useContext(AppContext);
