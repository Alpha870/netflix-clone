import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {

  const [registro, setRegistro] = useState('Iniciar sesión') 
    
  const registrarse = () => {
    setRegistro('Registrarse');
  }

  return (
    <div className="register">
      <h4 className="h4-sign">{registro}</h4>

      <input
        className="input-sign"
        placeholder=" Email..."
        type="email"
        required
        ></input>

      <input
        className="input-sign"
        placeholder=" Contraseña..."
        type="Password"
        required
      ></input>
    <Link to={'/'}>
      <button
        type="submit"
        className="button-sign">{registro}
      </button>
    </Link>
      <p className="p-sign">Nuevo en Netflix?
        <span
          className="span-sign"
          onClick={registrarse}
          > Registrate ahora.
        </span>
      </p>
    </div>
  );
};

export default SignUp;
