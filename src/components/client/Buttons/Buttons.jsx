"use client"
import Button from "@/components/Button/Button";
import { useAppContext } from "@/Context/AppContext";

export default function Buttons() {
  const { handleOpenLoginModal } = useAppContext();
  return (
    <>
      <div className="buttons">
        <Button text="Ir a promociones" />
        <Button text="Dejar una reseña" onClick={handleOpenLoginModal} />
      </div>
    </>
  );
}
