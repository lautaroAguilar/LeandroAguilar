import ReviewCard from "@/components/ReviewCard/ReviewCard"
import Button from "@/components/Button/Button"
export default function Review() {
  return (
    <>
        <div className="reviewContainer">
            <div className="title">
                <h2>Clientes</h2>
            </div>
            <div className="cardContainer">
                <ReviewCard/>
                <Button text="Dejar una reseña"/>
            </div>
        </div>
    </>
  )
}
