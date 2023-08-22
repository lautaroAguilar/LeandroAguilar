"use client"
import React from 'react'
import Link from 'next/link'
import {CustomButton, CustomLink} from "./button_styled";

export default function Button({text, onClick , type, href,}) {
  
    return (
      <>
      {href ? (
        <CustomButton type={type} onClick={onClick}>
          <CustomLink href={href}>{text}</CustomLink>
        </CustomButton>
      ) : (
        <CustomButton type={type} onClick={onClick}>
          {text}
        </CustomButton>
      )}
    </>
  )
}

