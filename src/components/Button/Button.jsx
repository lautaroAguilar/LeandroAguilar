import React from 'react'

export default function Button({text, onClick, href}) {
  
    return (
    <button className='btn' href={href} onClick={onClick}>{text}</button>
  )
}
