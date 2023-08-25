"use client";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import Button from "@/components/Button/Button";
import { useAppContext } from "@/context/AppContext";
import { fontTitle } from "@/app/font";
import styles from "./Review.module.css";
export default function Review() {
  const { isLoggedIn } = useAppContext;
  return (
    <>
      <div className={styles.reviewContainer}>
        <h2 className={fontTitle.className}>Clientes</h2>
        <div className={styles.cardContainer}>
          <ReviewCard />
        </div>
        {/* <div className={styles.buttonContainer}>
          <Button text="Dejar una reseña" onClick={isLoggedIn} />
        </div> */}
      </div>
    </>
  );
}
