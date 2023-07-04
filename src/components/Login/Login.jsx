import Button from "../Button/Button"
import Form from "../Form/Form"
export default function Login() {
  return (
    <>
        <div className="Login">
            <div className="texts">
                <h3>Primero necesitas identificarte</h3>
                <p>Podés crearte una cuenta o iniciar sesión con tu cuenta de Google</p>
            </div>
            <Button text="Iniciar sesión con Google"/>
            <Form/>
        </div>  
    </>
  )
}
