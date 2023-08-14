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
  //REVIEW
  const [review, setReview] = useState({
    reseña: "",
  });
  const [getReview, setGetReview] = useState([]);

  const reviewChange = useCallback((e) => {
    setReview(e.target.value);
  }, []);

  const submitReview = (e) => {
    try {
      e.preventDefault();
      push(reviewRefe, review);
      console.log(review);
      if (review.reseña !== "") {
        window.location.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = () => {
    onValue(reviewRefe, (snap)=>{
      let data = Object.values(snap.val());
      setGetReview(data)
      console.log(data)
    })
  }
  //AUTH

  const [user, setUser] = useState({});
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
      setUser(currentUser);
    });
  }, []);
  //REDIRECTS
  const goToReview = () => {
    try {
      if (!user) {
        setErrorMessage("Primero debe iniciar sesion");
      } else {
        window.location.replace("/review");
      }
    } catch (error) {}
  };
  //PROMO
  const [catalogue, setCatalogue] = useState([])

  const getPromo = () => {
    onValue(catalogueRefe, (snap)=>{
      let data = snap.val();
      setCatalogue(data);
      console.log(data);
    })
  };
  return (
    <>
      <AppContext.Provider
        value={{
          user,
          errorMessage,
          message,

          review,
          reviewChange,
          submitReview,

          logInGoogle,
          logOut,

          goToReview,
          getReviews,
          getReview,

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
