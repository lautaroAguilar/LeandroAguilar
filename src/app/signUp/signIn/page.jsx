"use client"
import { useAppContext } from '@/context/AppContext'
import Button from '@/components/Button/Button'
import React from 'react'

export default function page() {
    const {signInWith, formData, handleChange, errorMessage} = useAppContext()
  return (
    <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            required
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            required
            placeholder="Contraseña"
            name="contraseña"
            type="password"
            id="contrasena"
            value={formData.contraseña}
            onChange={handleChange}
          />
        </div>
        <p>{errorMessage}</p>
        <Button onClick={signInWith} text="Iniciar sesión" />
      </form>
  )
}
