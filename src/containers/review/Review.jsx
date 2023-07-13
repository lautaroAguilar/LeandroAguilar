"use client"
import ReviewCard from "@/components/ReviewCard/ReviewCard"
import Button from "@/components/Button/Button"
import { useAppContext } from "@/context/AppContext"
import ReviewModal from "@/app/review/page"
export default function Review() {
  const {handleOpenLoginModal} = useAppContext
  return (
    <>
        <div className="reviewContainer">
            <div className="title">
                <h2>Clientes</h2>
            </div>
            <div className="cardContainer">
                <ReviewCard/>
                <Button text="Dejar una reseña" onClick={handleOpenLoginModal}/>
            </div>
            <ReviewModal/>
        </div>
    </>
  )
}
