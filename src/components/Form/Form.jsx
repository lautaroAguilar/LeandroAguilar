import Button from "../Button/Button";
import { useAppContext } from "@/context/AppContext";
export default function Form() {
  const { formData, handleChange, submitUser, errorMessage } = useAppContext();

  return (
    <>
      <form onSubmit={submitUser}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            required
            placeholder="Nombre"
            name="nombre"
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            required
            placeholder="Apellido"
            name="apellido"
            type="text"
            id="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
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
        <Button type="submit" text="Crear cuenta" />
      </form>
    </>
  );
}
