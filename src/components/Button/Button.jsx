"use client"
import React from 'react'
import Link from 'next/link'
import {CustomButton, CustomLink} from "./button_styled";

export default function Button({text, onClick , type, href, className}) {
  
    return (
      <>
      {href ? (
        <CustomButton className={className} type={type} onClick={onClick}>
          <CustomLink href={href}>{text}</CustomLink>
        </CustomButton>
      ) : (
        <CustomButton className={className} type={type} onClick={onClick}>
          {text}
        </CustomButton>
      )}
    </>
  )
}

