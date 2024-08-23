"use client";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { fontTitle } from "@/app/font";
import styles from "./Review.module.css";
export default function Review() {
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
