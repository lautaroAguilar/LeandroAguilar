"use client";
import React from "react";
import Link from "next/link";
import { fontTitle } from "@/app/font";
export default function Button({
  text,
  onClick,
  type,
  href,
  icon,
  secondary,
  terciary,
}) {
  return (
    <>
      {href ? (
        <button
          className={fontTitle.className}
          type={type}
          onClick={onClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "48px",
            width: "100%",
            color: "#f5f5f5",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            background: secondary || terciary ? "transparent" : "#b71023",
            border: secondary ? "1px solid #9c9c9c" : "none",
          }}
        >
          <Link href={href}>
            {text} {icon}
          </Link>
        </button>
      ) : (
        <button
          className={fontTitle.className}
          type={type}
          onClick={onClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "48px",
            width: "100%",
            color: "#f5f5f5",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            background: secondary || terciary ? "transparent" : "#b71023",
            border: secondary ? "1px solid #9c9c9c" : "none",
          }}
        >
          {text} {icon}
        </button>
      )}
    </>
  );
}
