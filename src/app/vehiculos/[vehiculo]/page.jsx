"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import styles from "./vehiculo.module.css";

export default function Page() {
  const { getVehiculoById, car } = useAppContext();
  const { vehiculo } = useParams(); /* obtiene el ID del vehículo */

  useEffect(() => {
    getVehiculoById(vehiculo);
  }, [vehiculo]);
  return (
    <div className={styles.container}>
      <h2>Este es el vehículo: {car.title}</h2>
      <p>Con este auto vas a poder hacer una banda de cosas</p>
    </div>
  );
}
