"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import fiatGiama from "../../../public/fiatGiama.svg";
import { fontTitle } from "@/app/font";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { useAppContext } from "@/context/AppContext";
import { IoMenu } from "react-icons/io5";
import { Modal, Slide } from "@mui/material";
export default function Header() {

  const { goToReview, isOpen, setIsOpen, isMobile } = useAppContext();

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      {isMobile ? (
        <>
          <Modal open={isOpen} onClose={handleClose}>
            <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
              <div className={styles.burguerMenu_container}>
                <nav className={styles.nav}>
                  <ul>
                    <li>
                      <Link
                        href={"/quienes-somos"}
                        className={`${styles.nav_options} ${fontTitle.className}`}
                      >
                        QUIENES SOMOS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/vehiculos"}
                        className={`${styles.nav_options} ${fontTitle.className}`}
                      >
                        VEHÍCULOS
                      </Link>
                    </li>
                  </ul>
                  <div className={styles.container_cta_mobile}>
                    <Button
                      secondary
                      text="Dejar una reseña"
                      onClick={goToReview}
                      color={"#0c0c0c"}
                      style={{ width: "100%", border: "1px solid #0c0c0c" }}
                    />
                    <Button
                      text={"Contactar"}
                      color={"#f5f5f5"}
                      href={
                        "https://api.whatsapp.com/send?phone=5491123231563&text=Buen%20día,%20me%20comunico%20desde%20la%20página%20de%20Leandro%20Aguilar%20-%20Fiat%20Giama"
                      }
                      target={"_blank"}
                      style={{ width: "100%" }}
                    />
                  </div>
                </nav>
              </div>
            </Slide>
          </Modal>
          <div className={styles.container_logo}>
            <Link href={"/"} className={styles.link_logo}>
              <Image
                src={fiatGiama}
                alt="logo de Fiat Giama"
                className={styles.giama}
              />
            </Link>
            <h1 className={`${styles.title} ${fontTitle.className}`}>
              Leandro Aguilar
            </h1>
          </div>
          <div className={styles.container_cta}>
            <Button
              terciary
              text={""}
              color={"#fff"}
              icon={<IoMenu size={30} />}
              onClick={handleOpen}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.container_logo}>
            <Link href={"/"} className={styles.link_logo}>
              <Image
                src={fiatGiama}
                alt="logo de Fiat Giama"
                className={styles.giama}
              />
            </Link>
            <div className={styles.divider}></div>
            <h1 className={`${styles.title} ${fontTitle.className}`}>
              Leandro Aguilar
            </h1>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link
                  href={"/quienes-somos"}
                  className={`${styles.nav_options} ${fontTitle.className}`}
                >
                  QUIENES SOMOS
                </Link>
              </li>
              <li>
                <Link
                  href={"/vehiculos"}
                  className={`${styles.nav_options} ${fontTitle.className}`}
                >
                  VEHÍCULOS
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.container_cta}>
            <Button secondary text="Dejar una reseña" onClick={goToReview} />
            <Button
              text={"Contactar"}
              color={"#f5f5f5"}
              href={
                "https://api.whatsapp.com/send?phone=5491123231563&text=Buen%20día,%20me%20comunico%20desde%20la%20página%20de%20Leandro%20Aguilar%20-%20Fiat%20Giama"
              }
              target={"_blank"}
            />
          </div>
        </>
      )}
    </header>
  );
}
