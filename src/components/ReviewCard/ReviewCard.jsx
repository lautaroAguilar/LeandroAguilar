"use client"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useEffect } from "react";


export default function ReviewCard() {
  const {getReviews, reviews} = useAppContext()
  
  useEffect(()=>{
    getReviews()
  },[])
  return (
    <>
      {reviews.map((review, index)=>(

      <div className="Card" key={index}>
        <div className="userInfo">
          <div className="imgContainer">
            <img src={review.photo} width={20} height={20}/>
          </div>
          <h3>{review.userName}</h3>
          <p>{review.email}</p>
        </div>
        <div className="userOpinion">
          <p>
            {review.review}
          </p>
        </div>
      </div>
      ))}
    </>
  );
}
