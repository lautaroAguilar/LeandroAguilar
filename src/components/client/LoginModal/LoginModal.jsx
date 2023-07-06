"use client"
import Button from "../../Button/Button";
import Form from "../../Form/Form";
import Modal from 'react-modal';
import { useAppContext } from "@/Context/AppContext";
export default function Login() {
  
  Modal.setAppElement('body');
  const { isOpen, setIsOpen, handleCloseModal  } = useAppContext();
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <div className="Login">
          <div className="texts">
            <h3>Primero necesitas identificarte</h3>
            <p>
              Podés crearte una cuenta o iniciar sesión con tu cuenta de Google
            </p>
          </div>
          <Button text="Iniciar sesión con Google" />
          <Form />
        </div>
      </Modal>
    </>
  );
}
