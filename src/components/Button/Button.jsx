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
  background,
  color,
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
            height: "36px",
            width: "auto",
            minWidth: "120px",
            background:
              secondary || terciary
                ? "transparent"
                : background
                ? background
                : "#b71023",
            color: color ? color : "#f5f5f5",
            padding: "8px 12px",
            borderRadius: "18px",
            border: secondary ? "2px solid #9c9c9c" : "none",
            cursor: "pointer",
          }}
        >
          <Link
            href={href}
            style={{
              width: "100%",
              height: "100%",
              alignContent: "center",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            {text.toUpperCase()} {icon}
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
            height: "36px",
            width: "auto",
            minWidth: "120px",
            background:
              secondary || terciary
                ? "transparent"
                : background
                ? background
                : "#b71023",
            color: color ? color : "#f5f5f5",
            fontSize: "11px",
            fontWeight: "700",
            padding: "8px 12px",
            borderRadius: "18px",
            border: secondary ? "1.5px solid #9c9c9c" : "none",
            cursor: "pointer",
            letterSpacing: "2px",
          }}
        >
          {text.toUpperCase()} {icon}
        </button>
      )}
    </>
  );
}
