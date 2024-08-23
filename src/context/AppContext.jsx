"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  query,
  push,
  onValue,
  get,
  child,
} from "firebase/database";
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
  //GENERAL STATES}
  const [isOpen, setIsOpen] = useState(false);

  //AUTH

  const [currentUser, setCurrentUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const logInGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((data) => {
        if (data.user.displayName) {
          window.location.replace("/review");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const logOut = (e) => {
    e.preventDefault();
    signOut(auth).then((result) => {});
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
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
      if (reseña !== "") {
        window.location.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const sendToFirebase = () => {
    if (userReview.review !== "") {
      push(reviewRefe, userReview);
    }
  };
  const getReviews = () => {
    onValue(reviewRefe, (snap) => {
      let data = Object.values(snap.val());
      setReviews(data.reverse());
    });
  };
  const [send, setSend] = useState("");
  const reviewAlreadySend = () => {
    setSend(reviews.some((review) => review.email === currentUser.email));
  };
  //REDIRECTS
  const goToReview = () => {
    try {
      if (!currentUser) {
        setErrorMessage("Primero debe iniciar sesion");
        window.location.replace("/signUp");
      } else {
        window.location.replace("/review");
      }
    } catch (error) {}
  };
  //PROMO
  const [catalogue, setCatalogue] = useState([]);
  const [car, setCar] = useState("");
  const getPromo = () => {
    onValue(catalogueRefe, (snap) => {
      let data = snap.val();
      setCatalogue(data);
    });
  };
  const getVehiculoById = async (vehiculoId) => {
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `catalogue/${vehiculoId}`));
      if (snapshot.exists()) {
        setCar(snapshot.val());
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  async function getFinancing() {
    const dbRef = ref(db);
    try {
      const snapshot = await get(child(dbRef, `financings/`));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No available");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
          reviewAlreadySend,
          send,

          logInGoogle,
          logOut,

          goToReview,
          getReviews,
          reviews,

          getPromo,
          catalogue,
          getVehiculoById,
          car,
          getFinancing,

          isOpen,
          setIsOpen,
          isMobile
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useAppContext = () => useContext(AppContext);
