"use client";
import { createContext, useCallback, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, query, push } from "firebase/database";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
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
    createUser();
  };
  //review
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
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const logInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        setUser({
          nombre: data.user.displayName,
          email: data.user.email,
          foto: data.user.photoURL,
          verificado: data.user.emailVerified,
        });
        if (user) {
          window.location.replace("/");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const logOut = () => {
    signOut(auth).then((result) => {
      console.log("cerró sesión", result);
    });
  };

  const isLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      console.log("está logueado?", user);
      if (user) {
        window.location.replace("/review");
      } else {
        window.location.replace("/signUp");
      }
    });
  };
  const createUser = () => {
    createUserWithEmailAndPassword(auth, formData.email, formData.contraseña)
      .then((userCredential) => {
        console.log(userCredential);

        setUser({
          nombre: formData.nombre,
          email: userCredential.user.email,
          contraseña: formData.contraseña
        });
        if (!emailRegex.test(formData.email)) {
          setErrorMessage("Correo electrónico inválido");
        } else {
          window.location.replace("/signUp/signIn");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };
  /* Avances: 
      Ya crea el usuario con mail y contraseña, solucion a los modales y que no */
  // Falta:
  // Validar el inicio de sesion sea igual a la cuentra creada.
  // Redirijir a donde corresponda
  const signInWith = () => {
    signInWithEmailAndPassword(auth, user.email, user.contraseña).then((result)=>{
      console.log(user.email, user.contraseña)
      console.log(result)
    });
  };

  return (
    <>
      <AppContext.Provider
        value={{
          formData,
          handleChange,
          submitUser,
          user,
          errorMessage,

          review,
          reviewChange,
          submitReview,

          signInWith,
          logInGoogle,
          logOut,
          isLoggedIn,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useAppContext = () => useContext(AppContext);
