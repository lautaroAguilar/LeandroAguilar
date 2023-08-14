"use client"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useEffect } from "react";


export default function ReviewCard() {
  const {getReviews, getReview, user} = useAppContext()
  
  useEffect(()=>{
    getReviews()
  },[])
  return (
    <>
      {getReview.map((rev)=>(

      <div className="Card">
        <div className="userInfo">
          <div className="imgContainer">
            
          </div>
          <h3>{user.displayName}</h3>
        </div>
        <div className="userOpinion">
          <p>
            {rev}
          </p>
        </div>
      </div>
      ))}
    </>
  );
}
