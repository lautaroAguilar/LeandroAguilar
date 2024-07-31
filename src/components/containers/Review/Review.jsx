"use client";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { useAppContext } from "../../../context/AppContext.jsx";
import { fontTitle } from "@/app/font";
import styles from "./Review.module.css";
export default function Review() {
  const { goToReview } = useAppContext;
  return (
    <>
      <div id="review" className={styles.reviewContainer}>
        <h2 className={fontTitle.className}>TESTIMONIOS</h2>
        <div className={styles.cardContainer}>
          <ReviewCard />
        </div>
      </div>
    </>
  );
}
