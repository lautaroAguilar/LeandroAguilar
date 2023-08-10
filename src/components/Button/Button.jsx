"use client"
import React from 'react'
import "./Button.css"
import Link from 'next/link'
import style from "./Button.css"
export default function Button({text, onClick , type,href}) {
  
    return (
      <>
      {href ? (
        <button className={style.btn} type={type} onClick={onClick}>
          <Link href={href}>{text}</Link>
        </button>
      ) : (
        <button type={type} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  )
}

