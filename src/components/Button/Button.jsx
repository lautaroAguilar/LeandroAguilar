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
          type={type}
          onClick={onClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "36px",
            width: "100%",
            color: "#f5f5f5",
            borderRadius: "8px",
            cursor: "pointer",
            background: secondary || terciary ? "transparent" : "#b71023",
            border: secondary ? "1px solid #9c9c9c" : "none",
          }}
        >
          <Link
            href={href}
            style={{
              width: "100%",
              height: "100%",
              alignContent: "center",
              fontSize: "14px",
            }}
          >
            {text} {icon}
          </Link>
        </button>
      ) : (
        <button
          type={type}
          onClick={onClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "36px",
            width: "100%",
            color: "#f5f5f5",
            fontSize: "14px",
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
