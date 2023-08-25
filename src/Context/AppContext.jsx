"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, query, push, onValue } from "firebase/database";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
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
const catalogueRefe = ref(db, "catalogue/");
const reviewRefe = ref(db, "review/");
//auth
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const AppContextProvider = ({ children }) => {
  //AUTH

  const [currentUser, setCurrentUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const logInGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        if (data.user.displayName) {
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };
  const logOut = (e) => {
    e.preventDefault();
    signOut(auth).then((result) => {
      console.log("cerró sesión", result);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setCurrentUser(currentUser);
    });
  }, []);
  //REVIEW
  const [reseña, setReseña] = useState("");
  const [userReview, setUserReview] = useState({
    userName: "",
    email: "",
    photo: "",
    review: "",
  });
  const [reviews, setReviews] = useState([]);
  const reviewChange = useCallback((e) => {
    setReseña(e.target.value);
  }, []);
  //actualiza el userReview si la reseña cambia (para tener datos de usuario y reseña juntos)
  useEffect(() => {
    setUserReview({
      ...userReview,
      userName: currentUser.displayName,
      email: currentUser.email,
      photo: currentUser.photoURL,
      review: reseña,
    });
  }, [reseña]);
  const submitReview = async (e) => {
    try {
      e.preventDefault();
      sendToFirebase();
      /*  if (review.reseña !== "") {
        window.location.replace("/");
      } */
    } catch (error) {
      console.log(error);
    }
  };
  const sendToFirebase = () => {
    if (userReview.review !== "") {
      push(reviewRefe, userReview);
      console.log("se envia", userReview);
    }
  };
  const getReviews = () => {
    onValue(reviewRefe, (snap) => {
      let data = Object.values(snap.val());
      setReviews(data);
      console.log(data);
    });
  };
  
  //REDIRECTS
  const goToReview = () => {
    try {
      if (!currentUser) {
        setErrorMessage("Primero debe iniciar sesion");
      } else {
        window.location.replace("/review");
      }
    } catch (error) {}
  };
  //PROMO
  const [catalogue, setCatalogue] = useState([]);

  const getPromo = () => {
    onValue(catalogueRefe, (snap) => {
      let data = snap.val();
      setCatalogue(data);
      console.log(data);
    });
  };
  return (
    <>
      <AppContext.Provider
        value={{
          currentUser,
          errorMessage,
          message,

          reseña,
          userReview,
          reviewChange,
          submitReview,

          logInGoogle,
          logOut,

          goToReview,
          getReviews,
          reviews,
          

          getPromo,
          catalogue,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useAppContext = () => useContext(AppContext);
